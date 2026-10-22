# denzel-mathiba-portfolio

Personal portfolio site for **Denzel Mathiba** — full-stack software developer based in Bulawayo, Zimbabwe.

Hand-written HTML, CSS and vanilla JavaScript. No frameworks, no build step, no trackers or analytics.

## Live site

https://gifttsithole1-web.github.io/denzel-mathiba-portfolio/

## Contents

- `index.html` — single-page layout: hero, about, technical skills, projects, experience, education, contact
- `styles.css` — dark/light theming via CSS custom properties, responsive grid, print styles
- `script.js` — theme persistence, mobile navigation, scroll reveal, sticky nav state
- `assets/denzel-mathiba-cv.pdf` — downloadable CV matching the site content

## Features

- Fully responsive from 320px up
- Light and dark themes, remembers the visitor's choice and respects `prefers-color-scheme`
- Keyboard accessible navigation with skip-safe focus states and reduced-motion support
- No external dependencies beyond Google Fonts
- Print stylesheet for clean paper output

## Local preview

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8080
```

## Deploy

Hosted with GitHub Pages from the `main` branch root. Any push to `main` publishes automatically.

---

© 2026 Denzel Mathiba
