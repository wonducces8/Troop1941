# Troop 1941 Website

A lightweight static site for Troop 1941 (Ashburn, VA) that highlights meetings at Farmwell Station Middle School, supports a Google Slides embed, shows the live troop calendar, and provides clear contact options.

## Quick start
1. Open `index.html` in your browser to preview locally.
2. Add your Google Slides embed URL to the `iframe` in the **Slides & highlights** section to publish meeting decks or photo recaps.
3. The Troop 1941 Google Calendar is already embedded under **Troop calendar**; update the `src` only if the calendar link changes.
4. The contact buttons email Scoutmaster Matthew Grinnell at `grinnell99@hotmail.com` by default; update the `mailto:` addresses if you prefer a different inbox.

## Easy hosting
Because this is a static site, you can host it anywhere that serves HTML files:
- **GitHub Pages**: push to a public repo, enable Pages, and point it at the `main` branch (or `/docs` if you move the files there).
- **Netlify/Vercel**: drag-and-drop the folder or connect the repo—no build step required.
- **Any static host**: upload the files as-is; there is no server-side code.

## File structure
- `index.html` – page structure and content
- `styles.css` – theming and layout
- `assets/images/` – placeholder images you can swap into the slides deck if needed
