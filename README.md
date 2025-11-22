# Troop 1941 Website

A lightweight static site for Troop 1941 (Ashburn, VA) that highlights meetings at Farmwell Station Middle School, features a photo gallery, shows an embedded calendar, and provides clear contact options.

## Quick start
1. Open `index.html` in your browser to preview locally.
2. Replace the placeholder images in `assets/images` with real troop photos (use the same filenames or update the `src` values in the gallery buttons).
3. Swap the calendar embed URL in the `iframe` under the **Troop calendar** section with your Google Calendar public embed link.
4. The contact buttons email Troop 1941 at `grinnell99@hotmail.com` by default; update the `mailto:` addresses if you prefer a different inbox.

## Easy hosting
Because this is a static site, you can host it anywhere that serves HTML files:
- **GitHub Pages**: push to a public repo, enable Pages, and point it at the `main` branch (or `/docs` if you move the files there).
- **Netlify/Vercel**: drag-and-drop the folder or connect the repo—no build step required.
- **Any static host**: upload the files as-is; there is no server-side code.

## File structure
- `index.html` – page structure and content
- `styles.css` – theming and layout
- `script.js` – lightbox for the photo gallery
- `assets/images/` – placeholder images to replace with troop photos
