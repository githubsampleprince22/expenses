# Receipt Budget (web app)

Runs fully on any phone or browser. Now powered by **Supabase** for multi-user shared expenses and real-time synchronization, with offline scanning support.

## Put it online free (GitHub Pages)
1. Push this folder to your GitHub repository.
2. In your repo, go to **Settings** > **Pages** > **Source**: "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
3. Your live link appears: `https://YOURNAME.github.io/receipt-budget/`

## Multi-User Sharing (Supabase)
- All expenses, receipts, and the monthly budget sync automatically to your Supabase project in real time.
- By default, all phones connect to the shared code `our-budget`.
- To use a custom family or group code, tap **👥 Code: our-budget** under tools and enter a code (e.g. `garcia-family`). Any device using the same code shares the same budget!
- When offline, scanning and manual entries still work; they automatically sync to Supabase once an internet connection is restored.

## Install on iPhone / Android
1. Open your link in **Safari** (iOS) or **Chrome** (Android).
2. Tap Share / Menu > **Add to Home Screen**.
3. Launch from the new home screen icon.

## Updating later
Upload changed files to GitHub, then bump the `CACHE` version in `sw.js` (and the `?v=` tag in `index.html`) so phones fetch the latest version.
