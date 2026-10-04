# Oneirodex website

Dark, responsive marketing site for [Oneirodex](https://github.com/cephyrixzyth/Oneirodex). The page uses real screenshots and the project's captioned walkthrough videos. The screenshots and videos show the app as it is.

## Preview

Serve this folder with any static HTTP server:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. The screen gallery uses captured app screens; the feature panels are sourced from the Oneirodex README and user/admin documentation; video cards load the public how-to index and stream clips on demand.

## Live demo

GitHub Pages serves this static site; the isolated, interactive member demo runs at [demo.oneirodex.blitz.cloud/demo](https://demo.oneirodex.blitz.cloud/demo) on the free Blitz plan. The demo uses disposable sample data, can cold-start after idle, and may reset on restart or deploy. Both demo CTAs launch the isolated service. Do not point them at a household production server.

## Files

- `index.html`: landing page, screenshot gallery, feature explorer, and video player.
- `styles.css`: dark responsive design, motion, and reduced-motion support.
- `script.js`: screen switching, feature panels, video search, filters, player, and demo links.
- `assets/screenshots/` and `assets/posters/`: screenshots and video posters from Oneirodex.
- `assets/videos.json`: walkthrough details from the app repository.

## Analytics

The public marketing site uses Cloudflare Web Analytics for aggregate page-view and visit metrics. Its site-specific beacon is in the document head; it does not use cookies or require the domain's DNS to move to Cloudflare. The analytics hostname is `oneirodex.com`.
