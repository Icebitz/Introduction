# Viktor Lín — Portfolio

A static, single-page portfolio for Viktor Lín (Senior Software Engineer). Dark theme, responsive layout, and lightweight canvas background—no framework or build pipeline.

## Stack

- HTML5, CSS3, vanilla JavaScript
- Served as static files only

## Run locally

Open `index.html` in a browser, or from the project root:

```bash
npx --yes serve .
```

Then visit the URL printed in the terminal (no install required if you use `npx serve` as above).

## Project layout

| File        | Role                          |
| ----------- | ----------------------------- |
| `index.html` | Markup and content           |
| `styles.css` | Layout, theme, responsiveness |
| `script.js`  | Background canvas and pointer-driven effects |

## Notes

- Respects `prefers-reduced-motion` for canvas and motion-heavy UI.
- Safe to host on any static host (GitHub Pages, Netlify, S3, etc.).
