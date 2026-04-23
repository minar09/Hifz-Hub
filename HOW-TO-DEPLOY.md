# 🕌 Hifz Hub — GitHub Pages Deploy Guide
## One-time setup (~5 minutes). Free forever.

---

## 📁 Files in this ZIP

```
hifzhub-pwa/
├── index.html        ← The full app
├── manifest.json     ← PWA install config
├── sw.js             ← Service worker (offline support)
├── icons/
│   ├── icon-192.png  ← App icon (Android home screen)
│   ├── icon-512.png  ← App icon (splash screen)
│   └── favicon.png   ← Browser tab icon
└── HOW-TO-DEPLOY.md  ← This guide
```

---

## 🚀 STEP 1 — Create a free GitHub account
If you don't have one: https://github.com/signup
(It's free, no credit card needed)

---

## 🚀 STEP 2 — Create a new repository

1. Go to https://github.com/new
2. Fill in:
   - **Repository name:** `hifzhub` (or any name you like)
   - **Visibility:** ✅ Public  ← Required for free GitHub Pages
   - Leave everything else as default
3. Click **"Create repository"**

---

## 🚀 STEP 3 — Upload all the files

On the new empty repository page:

1. Click **"uploading an existing file"** (link in the middle of the page)
2. Drag & drop ALL files from this ZIP:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - The entire `icons/` folder (drag the folder itself)
3. Scroll down, click **"Commit changes"**

> 💡 Tip: You can also drag the whole unzipped folder at once.

---

## 🚀 STEP 4 — Enable GitHub Pages

1. In your repository, click **Settings** (top tab)
2. In the left sidebar click **Pages**
3. Under **"Branch"**, select `main` and `/ (root)`
4. Click **Save**

GitHub will show:
> ✅ *"Your site is live at https://YOUR-USERNAME.github.io/hifzhub/"*

**It takes 1–2 minutes to go live the first time.**

---

## 📱 STEP 5 — Install on Android as an App

1. Open **Chrome** on your Android phone
2. Go to your URL: `https://YOUR-USERNAME.github.io/hifzhub/`
3. Chrome will show a banner: **"Add Hifz Hub to Home screen"** — tap it
   - OR tap the ⋮ menu → **"Add to Home screen"** / **"Install app"**
4. It installs like a real app — full screen, no browser bar, your own icon! 🎉

---

## 💻 STEP 6 — Use on PC too

Just open the same URL in any browser:
`https://YOUR-USERNAME.github.io/hifzhub/`

In Chrome/Edge on desktop you'll also see an install icon (⊕) in the address bar to install it as a desktop app.

---

## 🔄 Syncing between PC and Android

Since the app uses browser localStorage (per device), use the built-in sync:

1. On Device A → tap **⬇ Export** → saves `hifzhub-YYYY-MM-DD.json`
2. Transfer the file to Device B (WhatsApp, email, Google Drive, USB — anything)
3. On Device B → tap **⬆ Import** → selects the JSON file → merged instantly

---

## 🔁 Updating the app in the future

If you get an updated `index.html` from Claude:
1. Go to your GitHub repository
2. Click on `index.html` → click the ✏️ pencil (edit) icon
3. Select all, paste new content → **Commit changes**
4. The app auto-updates on all devices within seconds
   (A toast notification "New version available" will appear in the app)

---

## ❓ Troubleshooting

| Problem | Fix |
|---|---|
| Page shows 404 | Wait 2 more minutes, then hard-refresh (Ctrl+Shift+R) |
| "Add to Home screen" not showing | Make sure you're using Chrome, not Samsung Browser |
| Icons look broken | Make sure the `icons/` folder was uploaded (not just the files inside it) |
| Fonts look wrong offline | Open the app online once first — fonts get cached automatically |
| API fetch fails | You need internet to fetch new Quran/Hadith text. Your saved library works offline. |

---

## 🌐 Your app URL will be:
```
https://YOUR-GITHUB-USERNAME.github.io/hifzhub/
```
Bookmark this on all your devices!
