<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/0xAAcodeislaw/0xAAcodeislaw/main/IR/assets/recursion-dark.svg">
  <img src="https://raw.githubusercontent.com/0xAAcodeislaw/0xAAcodeislaw/main/IR/assets/recursion-light.svg" alt="Infinite recursion: nested frames descend to a base case and return with a smaller problem solved">
</picture>

<h1><code>0xAAcodeislaw</code></h1>

<p><strong>infinite recursion · finite hardware · executable curiosity</strong></p>
<p><code>recurse(problem) → recurse(smaller(problem)) → base case → ship()</code></p>

<a href="https://0xAAcodeislaw.github.io/"><img src="https://img.shields.io/badge/live_resume-0xAAcodeislaw.github.io-0969DA?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=24292F" alt="Live resume"></a>

</div>

> Every locked system is a function. Every function has a base case.

### `recursive identity`

```c
result solve(problem) {
    if (is_base_case(problem)) {
        return ship(problem);
    }

    inspect(problem);
    patch(problem);
    test(problem);
    return solve(make_smaller(problem));
}
```

<div align="center">

<pre>
┌─ frame(∞) ───────────────────────────────────┐
│ input   : locked-down hardware               │
│ method  : inspect → patch → test             │
│ return  : a smaller problem                  │
│ invariant: curiosity survives every frame    │
└──────────────────────────────────────────────┘
</pre>

</div>

### `stack frames`

| depth | frame | current recursion |
|---:|---|---|
| `00` | hardware | ESP32 firmware · cellular modules · router boxes |
| `01` | protocol | C · Objective-C · Swift · Shell · Python · Go |
| `02` | memory | text becomes structure, structure becomes recall |
| `∞` | base case | if the vendor locked it down, it is a puzzle |

### `active branches`

| branch | what it does |
|---|---|
| [macos-universal-clipboard-repair](https://github.com/0xAAcodeislaw/macos-universal-clipboard-repair) | macOS diagnostics and repair for Universal Clipboard, Handoff and Continuity Camera |
| [dji-4g-vohive-mac](https://github.com/0xAAcodeislaw/dji-4g-vohive-mac) | Apple Silicon UTM VM that turns a DJI 4G module into a Quectel EC25 |
| [DJI-4G-Connect](https://github.com/0xAAcodeislaw/DJI-4G-Connect) | one-click macOS connector for the first-generation DJI 4G module |
| [ImmortalWrt-ImageBuilder](https://github.com/0xAAcodeislaw/ImmortalWrt-ImageBuilder) | cloud ImageBuilder workflow with sized firmware, Docker and plugin integration |
| [RunFilesBuilder](https://github.com/0xAAcodeislaw/RunFilesBuilder) | builds iStoreOS/ImmortalWrt self-extracting `run` packages from the latest ipk |
| [iStoreOS-Actions](https://github.com/0xAAcodeislaw/iStoreOS-Actions) | iStoreOS support for Amlogic, Rockchip and Allwinner boxes |
| [img-installer](https://github.com/0xAAcodeislaw/img-installer) | Debian-Live image installer for Armbian/OpenWrt on x86-64 |

### `memory branch`

| project | recursive study loop |
|---|---|
| [twgx](https://github.com/0xAAcodeislaw/twgx) | 《滕王阁序》全文、逐字注解、记忆卡与离线预览 |
| [xj](https://github.com/0xAAcodeislaw/xj) | 《般若波罗蜜多心经》全文、注音、译解与记忆卡 |
| [jgj](https://github.com/0xAAcodeislaw/jgj) | 《金刚经》全文、句群翻译、注疏复核与长图预览 |

### `toolchain`

![C](https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white)
![Objective-C](https://img.shields.io/badge/Objective--C-43853D?style=for-the-badge&logo=apple&logoColor=white)
![Swift](https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)

![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=for-the-badge&logo=espressif&logoColor=white)
![ImmortalWrt](https://img.shields.io/badge/ImmortalWrt-F6821F?style=for-the-badge&logo=openwrt&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white)
![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

### `observability`

<div align="center">

<table>
  <tr>
    <td>
      <a href="https://github.com/vn7n24fzkq/github-profile-summary-cards">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=0xAAcodeislaw&amp;theme=github_dark">
          <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=0xAAcodeislaw&amp;theme=github" alt="GitHub statistics">
        </picture>
      </a>
    </td>
    <td>
      <a href="https://github.com/vn7n24fzkq/github-profile-summary-cards">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=0xAAcodeislaw&amp;theme=github_dark">
          <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=0xAAcodeislaw&amp;theme=github" alt="Repositories by language">
        </picture>
      </a>
    </td>
  </tr>
</table>

<a href="https://github.com/vn7n24fzkq/github-profile-summary-cards">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=0xAAcodeislaw&amp;theme=github_dark">
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=0xAAcodeislaw&amp;theme=github" alt="GitHub activity details">
  </picture>
</a>

<br>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/0xAAcodeislaw/0xAAcodeislaw/main/assets/contribution-breakdown-dark.svg">
  <img src="https://raw.githubusercontent.com/0xAAcodeislaw/0xAAcodeislaw/main/assets/contribution-breakdown-light.svg" alt="Contribution breakdown for the last 365 days">
</picture>

</div>

---

<div align="center">

<pre>
0xAA | code is law
^^^^   ^^^^^^^^^^^
address identity · protocol-defined order
</pre>

<code>return recurse();</code>

<br><br>

[![visitors](https://api.visitorbadge.io/api/visitors?path=0xAAcodeislaw%2F0xAAcodeislaw&label=probes&labelColor=%2324292F&countColor=%230969DA)](https://visitorbadge.io/status?path=0xAAcodeislaw%2F0xAAcodeislaw)

</div>
