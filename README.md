# Grwp pre-launch site

Static site — no build step.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. In Vercel: New Project -> import the repo.
3. Framework preset: **Other**. Build command: none. Output directory: `/` (root).
4. Deploy.

## Files
- `index.html` — landing page
- `how-it-works.html` — How it works
- `assets/` — photos, logos, annotations, intro clip, icons
- `_ds/` — Grwp design system (tokens, styles, components)
- `support.js`, `image-slot.js`, `grwp-map.js` — runtime

## Notes
- Signup posts to Formspree (form id `mkoaybbp`). Change it in the page's props if needed.
- The map uses CARTO tiles and needs a network connection.
