# Deploying KKS

Hosted on Firebase Hosting (project `christmas-kks`, already configured in `.firebaserc` and `firebase.json`).

## One-time setup (new machine)

```powershell
npm install -g firebase-tools
firebase login
```

## Deploy

```powershell
npm install          # if dependencies changed / fresh clone
npm run build        # outputs to ./build
firebase deploy      # deploys hosting + database rules
```

Hosting only (skip `database.rules.json`):

```powershell
firebase deploy --only hosting
```

Live at: https://christmas-kks.web.app

## Optional: test before going live

```powershell
npm run preview                                     # local preview of ./build
firebase hosting:channel:deploy preview --expires 7d # temporary public URL
```

## Troubleshooting

- **"Failed to get details for project" / "Failed to list Firebase projects" / not logged in**: the saved login token expired (happens between yearly deploys). Run `firebase login --reauth`.
- **Wrong project**: `firebase use christmas-kks`
- **Old version still showing**: hard refresh (Ctrl+F5); confirm `npm run build` ran before deploying.
- **Rollback**: Firebase Console → Hosting → Release history → Roll back.
