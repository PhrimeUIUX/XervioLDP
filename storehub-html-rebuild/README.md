# StoreHub HTML Rebuild

This is a clean static rebuild of the exported Framer page using readable HTML, CSS, and JavaScript.

## Structure

- `index.html` contains semantic sections for the header, hero, feature cards, industries, reviews, demo form, and footer.
- `styles.css` contains the design tokens, responsive layout rules, button styles, card styles, and animations.
- `script.js` contains editable data arrays for repeated feature, industry, and review cards plus the mobile menu and reveal behavior.
- `assets/` contains the local images copied from the original export.

## Preview

Open `index.html` directly in a browser, or serve this folder with any static server.

```bash
cd storehub-html-rebuild
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.
