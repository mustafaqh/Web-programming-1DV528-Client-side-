# A1 — Client‑Side Website (1DV528 Web Programming)

**Course:** 1DV528 – Web Programming (Client‑Side)  
**Folder:** `a1-website`  
**Author(s):** [Mustafa Habeb]  


---

## Overview

This assignment delivers a **client‑side website** built with **semantic HTML5**, **modern CSS (Flexbox/Grid)** and **vanilla JavaScript**. The focus is on **clear separation of concerns (HTML/CSS/JS)**, **accessibility**, **performance**, and using **browser APIs** where relevant. Optional enhancements include **persisting small amounts of state** on the client (e.g., theme, favorites) and **fetching JSON** data asynchronously.

---

## Features

- **Semantic HTML** document structure with proper headings and landmarks.  
- **Responsive layout** (mobile‑first) using Flexbox/Grid and fluid media.  
- **Accessible navigation** (keyboard focus, skip‑link, ARIA where needed).  
- **Theming / dark mode** (optional) persisted in `localStorage`.  
- **Form interactions & validation** (HTML5 constraints + JS).  
- **Async data** (optional): fetch JSON and render to the DOM.  
- **Performance basics**: optimized assets, responsive images, caching hints.  

> Adapt the list to match your actual implementation.

---

## Tech Stack

- **HTML5** for structure and semantics  
- **CSS3** (SCSS/Tailwind optional) for layout and styling  
- **JavaScript (ES modules)** for interactivity and DOM logic  
- **Browser APIs**: `fetch`, `localStorage`, `matchMedia`, `History` (as used)  

---

## Project Structure (example)

```
a1-website/
├─ index.html
├─ pages/               # optional: about.html, contact.html, etc.
├─ styles/
│  ├─ main.css
│  └─ components/      # buttons.css, layout.css ...
├─ scripts/
│  ├─ main.js
│  └─ modules/         # nav.js, theme.js, api.js ...
├─ assets/
│  ├─ images/
│  └─ icons/
├─ data/               # optional JSON used by the site
└─ README.md
```

Update the tree to reflect your files.

---

## Getting Started

### Option 1 — Open directly
Open `index.html` in a modern browser.

### Option 2 — Serve locally (recommended for modules/fetch)
```bash
# Python http server
python3 -m http.server 5500
# then open http://localhost:5500/a1-website/
```

> VS Code users: use the **Live Server** extension and click “Go Live”.

---

## Development Checklist

**HTML & Semantics**
- Validates in W3C HTML Validator; correct headings (h1→h2…), lists, tables.  
- Landmarks: `<header> <nav> <main> <footer>` used appropriately.  

**Accessibility**
- Keyboard navigation works; visible focus styles.  
- Color contrast ≥ 4.5:1; provide alt text for images.  
- Skip‑to‑content link; ARIA only when semantics aren’t enough.  

**CSS & Layout**
- Mobile‑first; responsive grid/flex; no horizontal scroll on small screens.  
- Use logical properties where possible (e.g., `margin-inline`).  
- Avoid !important; use utility classes or BEM naming if helpful.  

**JavaScript**
- Keep logic in modules under `scripts/modules/*`.  
- Don’t inline large JS in HTML; attach events unobtrusively.  
- If you fetch data, handle loading/error states gracefully.  
- If you persist state (e.g., theme), use `localStorage` with sensible defaults.  

**Performance**
- Optimize images (sizes/srcset); use `defer` for scripts.  
- Minify/inline critical CSS (optional).  
- Lighthouse score targets: **Perf ≥ 90, A11y ≥ 90, Best Practices ≥ 90**.  

---

## How to Build/Run Tests (optional)

If you add tooling:
```bash
# Example package.json scripts
npm run serve      # dev server
npm run lint       # eslint/stylelint
npm run format     # prettier
npm run build      # minify assets
```

---

## Deployment (GitHub Pages)

1. Push the site to `main` (or `docs/` folder).  
2. Settings → Pages → **Source** = `main`/`docs` (or `/root`).  
3. Copy the public URL into the **Live demo** link above.

---

## Mapping to Course Outcomes

- **HTML/CSS/JS separation** and **browser components** → *A.1–A.2*.  
- **Persistent client storage** (`localStorage`, IndexedDB) → *A.3*.  
- **Async JSON via `fetch`** → *A.4*.  
- **Accessibility + performance + browser APIs** → *A.5*.  
- **Problem analysis & JS design** (modules, events, state) → *A.6*.

---

## Credits / License

- Icons & images: [source/attribution if applicable].  
- License: MIT .

---


