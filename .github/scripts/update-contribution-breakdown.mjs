import fs from "node:fs";
import path from "node:path";

const token = process.env.GITHUB_TOKEN;
const login = process.env.GITHUB_REPOSITORY_OWNER || "0xAAcodeislaw";

if (!token) {
  throw new Error("GITHUB_TOKEN is required");
}

const to = new Date();
const from = new Date(to.getTime() - 365 * 24 * 60 * 60 * 1000);

const query = `
  query ContributionBreakdown($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
      }
    }
  }
`;

const response = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "User-Agent": "0xAAcodeislaw-contribution-breakdown",
  },
  body: JSON.stringify({
    query,
    variables: {
      login,
      from: from.toISOString(),
      to: to.toISOString(),
    },
  }),
});

const payload = await response.json();
if (!response.ok || payload.errors?.length) {
  throw new Error(JSON.stringify(payload.errors || payload));
}

const contributions = payload.data?.user?.contributionsCollection;
if (!contributions) {
  throw new Error(`No contribution data returned for ${login}`);
}

const counts = [
  contributions.totalPullRequestReviewContributions,
  contributions.totalIssueContributions,
  contributions.totalPullRequestContributions,
  contributions.totalCommitContributions,
].map(Number);

const total = counts.reduce((sum, value) => sum + value, 0);

function percentagesFor(values) {
  if (total === 0) return values.map(() => 0);

  const exact = values.map((value) => (value / total) * 100);
  const result = exact.map(Math.floor);
  let remainder = 100 - result.reduce((sum, value) => sum + value, 0);

  exact
    .map((value, index) => ({ index, fraction: value - Math.floor(value) }))
    .sort((a, b) => b.fraction - a.fraction)
    .forEach(({ index }) => {
      if (remainder > 0) {
        result[index] += 1;
        remainder -= 1;
      }
    });

  return result;
}

const percentages = percentagesFor(counts);

const palettes = {
  light: {
    background: "#ffffff",
    border: "#d0d7de",
    text: "#57606a",
    accent: "#0969DA",
    pointFill: "#ffffff",
  },
  dark: {
    background: "#0d1117",
    border: "#30363d",
    text: "#c9d1d9",
    accent: "#58A6FF",
    pointFill: "#0d1117",
  },
};

function svgFor(mode) {
  const palette = palettes[mode];
  const [codeReview, issues, pullRequests, commits] = percentages;
  const centerX = 220;
  const centerY = 164;
  const radius = 106;
  const point = (x, y, value) => `${x + (centerX - x) * (1 - value / 100)},${y + (centerY - y) * (1 - value / 100)}`;
  const vertices = [
    point(centerX, centerY - radius, codeReview),
    point(centerX + radius, centerY, issues),
    point(centerX, centerY + radius, pullRequests),
    point(centerX - radius, centerY, commits),
  ];
  const points = vertices.join(" ");
  const desc = `Last 365 days: ${commits}% commits, ${pullRequests}% pull requests, ${issues}% issues, ${codeReview}% code review.`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="440" height="320" viewBox="0 0 440 320" role="img" aria-labelledby="title desc">
  <title id="title">Contribution breakdown</title>
  <desc id="desc">${desc}</desc>
  <rect x="0.5" y="0.5" width="439" height="319" rx="8" fill="${palette.background}" stroke="${palette.border}"/>
  <g font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" fill="${palette.text}">
    <g stroke="${palette.accent}" stroke-width="2" stroke-linecap="round" opacity="0.9">
      <line x1="220" y1="58" x2="220" y2="270"/>
      <line x1="114" y1="164" x2="326" y2="164"/>
    </g>
    <polygon points="${points}" fill="${palette.accent}" fill-opacity="0.28" stroke="${palette.accent}" stroke-width="2"/>
    <g fill="${palette.pointFill}" stroke="${palette.accent}" stroke-width="2">
      <circle cx="${vertices[0].split(",")[0]}" cy="${vertices[0].split(",")[1]}" r="4"/>
      <circle cx="${vertices[1].split(",")[0]}" cy="${vertices[1].split(",")[1]}" r="4"/>
      <circle cx="${vertices[2].split(",")[0]}" cy="${vertices[2].split(",")[1]}" r="4"/>
      <circle cx="${vertices[3].split(",")[0]}" cy="${vertices[3].split(",")[1]}" r="4"/>
    </g>
    <g font-size="13" text-anchor="middle">
      <text x="220" y="34"><tspan x="220" dy="0">${codeReview}%</tspan><tspan x="220" dy="16">Code review</tspan></text>
      <text x="344" y="158" text-anchor="start"><tspan x="344" dy="0">${issues}%</tspan><tspan x="344" dy="16">Issues</tspan></text>
      <text x="220" y="292"><tspan x="220" dy="0">${pullRequests}%</tspan><tspan x="220" dy="16">Pull requests</tspan></text>
      <text x="96" y="158" text-anchor="end"><tspan x="96" dy="0">${commits}%</tspan><tspan x="96" dy="16">Commits</tspan></text>
    </g>
  </g>
</svg>
`;
}

const outputDir = path.join(process.cwd(), "assets");
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "contribution-breakdown-light.svg"), svgFor("light"));
fs.writeFileSync(path.join(outputDir, "contribution-breakdown-dark.svg"), svgFor("dark"));

console.log(JSON.stringify({ login, from: from.toISOString(), to: to.toISOString(), counts, percentages }));
