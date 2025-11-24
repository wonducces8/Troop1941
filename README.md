# Troop 1941 Website

A lightweight static site for Troop 1941 (Ashburn, VA) that highlights meetings at Farmwell Station Middle School, supports a Google Slides embed, shows the live troop calendar, spotlights patrols/leadership, and provides clear contact and resource links.

## Quick start
1. To preview with a local server, run `npm start` (uses `http-server` via `npx`); or simply open `index.html` in your browser.
2. The **Slides & highlights** section already embeds the Troop 1941 Google Slides deck; swap the `src` if you publish a new deck.
3. The **Resources** section links to the BSA youth application, weekend packing list, and medical forms—edit the URLs to match troop-specific docs if desired.
4. The Troop 1941 Google Calendar is already embedded under **Troop calendar**; update the `src` only if the calendar link changes.
5. The contact buttons open Gmail to message Scoutmaster Matthew Grinnell at `grinnell99@hotmail.com`; update the `to` and `su` parameters if you prefer a different inbox.

## Easy hosting
Because this is a static site, you can host it anywhere that serves HTML files:
- **GitHub Pages**: push to a public repo, enable Pages, and point it at the `main` branch (or `/docs` if you move the files there).
- **Netlify/Vercel**: drag-and-drop the folder or connect the repo—no build step required.
- **Any static host**: upload the files as-is; there is no server-side code.

## File structure
- `index.html` – page structure and content
- `styles.css` – theming and layout
- `assets/images/` – placeholder images you can swap into the slides deck if needed
