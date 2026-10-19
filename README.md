# Receipt Budget (web app)

Runs fully on the phone. No server, no keys, no laptop needed once it is hosted.

## Put it online free (GitHub Pages)
1. Create a new GitHub repository (public), e.g. `receipt-budget`.
2. Upload everything in this folder, keeping the `ocr` folder as it is.
   (The `ocr` folder holds the offline scanner; the largest files are about 4 MB each, which is fine.)
3. Repository Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. After a minute your link appears: `https://YOURNAME.github.io/receipt-budget/`

## Install on each iPhone
1. Open the link in **Safari** (it must be Safari).
2. Tap Share > **Add to Home Screen**.
3. Open it from the new home-screen icon. The first launch needs internet to download the scanner (about 11 MB); after that it works offline.

## Updating later
Upload the changed files to GitHub, then change `CACHE = 'receipt-budget-v1'` in sw.js to `v2` so phones fetch the new version.

## Backups
Data lives only on that phone. Use "Save backup" now and then, and "Restore backup" to move it to a new phone.
