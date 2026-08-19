# Grimoire Interactive – Website Repository

> Solo Game Dev Studio Website built with **Astro 4**, **TypeScript**, **SCSS** – deployed to **Cloudflare Pages**.

[![Deploy to Cloudflare Pages](https://github.com/GrimoireInteractive/grimoire-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/GrimoireInteractive/grimoire-website/actions/workflows/deploy.yml)
[![Astro](https://img.shields.io/badge/Astro-4.16-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

---

## 🎮 Studio & Game

**Grimoire Interactive** – Solo Game Dev Studio aus Deutschland.  
Erstes Spiel: **Codex Arcanum** – Ein tiefgründiges Idle RPG über arkanes Wissen, Heldenparteien & endlose Aufstiege.

- 🌐 Website: https://grimoire-interactive.de
- 🎮 Spiel: https://grimoire-interactive.de/codex-arcanum/
- 💬 Discord: https://discord.gg/grimoireinteractive
- 🐦 Twitter/X: https://twitter.com/GrimoireInteractive
- 🐙 GitHub: https://github.com/GrimoireInteractive

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Astro 4 (Static Site Generation) |
| **Language** | TypeScript 5.3 (Strict Mode) |
| **Styling** | SCSS (BEM-ish, CSS Custom Properties) |
| **Fonts** | Cinzel (Headings) + Inter (Body) + JetBrains Mono (Code) |
| **Hosting** | Cloudflare Pages (Global CDN, Edge) |
| **CI/CD** | GitHub Actions → Cloudflare Pages |
| **Security** | CSP, HSTS, Referrer-Policy, Permissions-Policy |
| **Analytics** | **None** (Privacy First) |
| **Cookies** | **None** (Tracking-Free) |

---

## 📁 Projektstruktur

```
grimoire-website/
├── .github/workflows/       # GitHub Actions (Deploy)
├── public/                  # Statische Assets
│   ├── assets/              # Favicons, Logos, OG Images
│   ├── robots.txt
│   └── _headers             # Cloudflare Headers Config
├── src/
│   ├── components/          # Header, Footer (Astro Components)
│   ├── layouts/             # BaseLayout.astro (SEO, JSON-LD)
│   ├── pages/               # Routes (file-based routing)
│   │   ├── index.astro              # Home
│   │   ├── codex-arcanum/index.astro # Game Landing Page
│   │   ├── about/index.astro         # Studio
│   │   ├── contact/index.astro       # Kontakt
│   │   ├── imprint/index.astro       # Impressum (DE)
│   │   ├── privacy/index.astro       # Datenschutz (DSGVO)
│   │   ├── terms/index.astro         # AGB & EULA
│   │   ├── cookies/index.astro       # Cookie-Richtlinie
│   │   ├── 404.astro                 # Custom 404
│   │   ├── sitemap-index.xml.js      # Sitemap Generator
│   │   └── rss.xml.js                # RSS Feed
│   ├── styles/              # SCSS (Variables, Components, Layouts)
│   │   ├── variables.scss   # Design Tokens
│   │   ├── global.scss      # Reset, Base
│   │   ├── components.scss  # Buttons, Cards, Grid, etc.
│   │   ├── header.scss      # Navigation, Mobile Menu
│   │   ├── footer.scss
│   │   ├── hero.scss
│   │   ├── game-page.scss
│   │   ├── legal.scss
│   │   └── index.scss       # Main Entry
│   └── layouts/
│       └── BaseLayout.astro
├── astro.config.mjs         # Astro Config (Cloudflare Adapter)
├── wrangler.toml            # Cloudflare Pages Config
├── package.json
├── tsconfig.json
└── _headers                 # Cloudflare Headers
```

---

## 🚀 Quick Start

### Voraussetzungen
- Node.js 20+ (LTS)
- npm 10+ (oder pnpm/yarn)

### Installation
```bash
# Repository klonen
git clone https://github.com/GrimoireInteractive/grimoire-website.git
cd grimoire-website

# Dependencies installieren
npm ci

# Development Server starten
npm run dev
# → http://localhost:4321
```

### Verfügbare Scripts
```bash
npm run dev       # Dev Server (Port 4321)
npm run build     # Production Build → ./dist
npm run preview   # Preview Build lokal
npm run astro     # Astro CLI
```

---

## 🌐 Deployment (Cloudflare Pages)

### Voraussetzungen
1. Cloudflare Account
2. GitHub Repository verbunden
2 Secrets in GitHub Repository Settings → **Secrets and variables → Actions**:
   - `CLOUDFLARE_ACCOUNT_ID` (aus Cloudflare Dashboard)
   - `CLOUDFLARE_API_TOKEN` (Custom Token: Account → Cloudflare Pages → Edit)

### Automatisches Deployment
- **Push to `main`/`master`** → Production Deploy
- **Pull Request** → Preview Deploy (eigene Subdomain)
- **Manuell** → Workflow Dispatch im Actions Tab

### Custom Domain (grimoire-interactive.de)
1. Cloudflare Pages → Project → Custom domains
2. `grimoire-interactive.de` + `www.grimoire-interactive.de` hinzufügen
3. DNS Records in Cloudflare DNS setzen (CNAME → Pages Domain)
4. TLS/SSL: "Full (strict)" aktivieren

---

## 🎨 Design System (SCSS Variables)

Alle Design-Tokens in `src/styles/variables.scss`:

```scss
// Farben
$color-bg-deep: #0a080c;
$color-gold: #d4a843;
$color-amethyst: #9b5de5;

// Typografie
$font-heading: 'Cinzel', serif;
$font-body: 'Inter', sans-serif;

// Spacing
$space-md: 1rem;
$space-lg: 1.5rem;

// Container
$container-max: 1200px;

// Breakpoints
$bp-md: 768px;
$bp-lg: 1024px;
```

### Nutzung in Komponenten
```scss
@use "variables" as *;

.my-component {
  background: $color-bg-card;
  padding: $space-lg;
  @include mq-md {
    padding: $space-xl;
  }
}
```

---

## 📄 Seiten & SEO

| Route | Titel | Description | JSON-LD |
|-------|-------|-------------|---------|
| `/` | Grimoire Interactive | Studio Landing | WebSite |
| `/codex-arcanum/` | Codex Arcanum: Idle RPG | Game Landing | VideoGame |
| `/about/` | Über uns | Studio Info | AboutPage |
| `/contact/` | Kontakt | Kontakt-Form | ContactPage |
| `/imprint/` | Impressum | §5 TMG | - |
| `/privacy/` | Datenschutz | DSGVO | - |
| `/terms/` | AGB & EULA | Legal | - |
| `/cookies/` | Cookie-Richtlinie | Cookie Policy | - |

**Alle Seiten enthalten:**
- Open Graph + Twitter Cards
- JSON-LD Structured Data
- Canonical URLs
- Hreflang (de/en/x-default)
- Semantic HTML5

---

## 🔒 Privacy & Security

| Feature | Status |
|---------|--------|
| **Tracking / Analytics** | ❌ Keine |
| **Cookies (Tracking)** | ❌ Keine |
| **Cookies (Essential)** | ✅ Nur `cookie-consent` |
| **LocalStorage (Theme/Lang)** | ✅ Opt-in via Banner |
| **Google Fonts** | ⚠️ Preconnect + Anonymous (Alternative: Self-host) |
| **Cloudflare Security** | ✅ WAF, Bot Management, DDoS |
| **CSP / HSTS / Permissions-Policy** | ✅ Via `_headers` |
| **Referrer-Policy** | `strict-origin-when-cross-origin` |

---

## 🧪 Development Guidelines

### Code Style
- **TypeScript Strict Mode** – keine `any`, strikte Null-Checks
- **Astro Components** – `<script>` für Logic, `<style>` für Scoped CSS
- **SCSS** – BEM-ish命名, Mobile-First, `mq-*` Mixins für Breakpoints
- **Accessibility** – Semantic HTML, ARIA Labels, Focus Visible, Skip Links

### Commits (Conventional Commits)
```bash
feat: neue Game-Page für Codex Arcanum
fix: Header Mobile Menu schließt nicht bei Escape
docs: README um Deployment-Sektion erweitert
chore: Dependencies aktualisieren
```

### Performance Budget
- **Lighthouse Score** ≥ 95 (Performance, Accessibility, Best Practices, SEO)
- **Total JS** < 50 KB (gzipped) – Astro hydriert nur Interaktivität
- **Images** – WebP/AVIF, responsive, lazy-loaded
- **Fonts** – Preconnect, `font-display: swap`

---

## 📦 Assets Checkliste (vor Launch)

```
public/assets/
├── favicon.svg              ✅ SVG Logo
├── favicon-32.png           ☐ 32x32 PNG
├── favicon-16.png           ☐ 16x16 PNG
├── apple-touch-icon.png     ☐ 180x180 PNG
├── favicon-192.png          ☐ 192x192 PNG (PWA)
├── favicon-512.png          ☐ 512x512 PNG (PWA)
├── og-default.webp          ☐ 1200x630 (Home)
├── og-codex-arcanum.webp    ☐ 1200x630 (Game)
├── google-play-badge.svg    ☐ Official Badge
├── app-store-badge.svg      ☐ Official Badge
└── hero.webp                ☐ Hero Image (1920x1080)
```

**Tools für Generierung:**
- Favicon: `realfavicongenerator.net`
- OG Images: Figma Template (1200x630) → Export WebP
- Badges: Official Guidelines (Apple / Google)

---

## 📝 Lizenz

MIT License – siehe [LICENSE](LICENSE)

Code: Frei nutzbar, modifizierbar, verteilbar.  
Assets (Logos, Art, Fonts): **Nicht** in MIT enthalten – separat lizenziert.

---

## 🤝 Contributing

Issues & PRs willkommen! Besonders:
- 🐛 Bug Reports (mit Repro Steps)
- ♿ Accessibility Verbesserungen
- 🌍 i18n (Englisch, weitere Sprachen)
- 🎨 Design System Erweiterungen
- 📖 Docs / Tutorials

---

## 📞 Support & Kontakt

- 💬 **Discord** (schnellste Antwort): https://discord.gg/grimoireinteractive
- 📧 **E-Mail**: contact@grimoire-interactive.de
- 🐛 **Bug Reports**: GitHub Issues
- 🔒 **Security**: security@grimoire-interactive.de

---

**Made with ☕ & 🧙‍♂️ by Grimoire Interactive**  
*Solo Dev. Kein Publisher. Kein Bullshit.*