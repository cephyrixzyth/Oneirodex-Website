# Oneirodex website

Dark, responsive marketing site for [Oneirodex](https://github.com/chrisjrovira/Oneirodex). The page uses real screenshots and the project's real, captioned walkthrough videos. It does not create sample game artwork or pretend to be the app.

## Preview

Serve this folder with any static HTTP server:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. The screen gallery uses captured app screens; the feature panels are sourced from the Oneirodex README and user/admin documentation; video cards load the public how-to index and stream clips on demand.

## Live demo

GitHub Pages serves only this static site. The full Oneirodex demo needs a separate app and database instance. When that isolated service is deployed, set `liveDemoUrl` in the `demo-config` JSON block at the bottom of `index.html` to its public URL. Both demo CTAs will then launch it. Do not point this at a household production server.

## Files

- `index.html` — landing page, authentic screenshot gallery, feature explorer, and video player.
- `styles.css` — dark-first responsive design, motion, and reduced-motion support.
- `script.js` — screen switching, feature panels, video search/filter/player, and demo URL wiring.
- `assets/screenshots/` and `assets/posters/` — captured Oneirodex product imagery.
- `assets/videos.json` — real video walkthrough catalog from the app repository.

No analytics, sign-in, or app API calls are included on the marketing page.
