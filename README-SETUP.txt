N5 BIOLOGY NUMERACY LAB – PHONE-FRIENDLY WEB APP
================================================
This is a Progressive Web App (PWA) version of the existing Numeracy Lab.
Its questions, working, progress tracking and calculator remain inside index.html.
The JSON-based manifest describes the app and its icons; the service worker
caches the app so it normally works offline AFTER the first online visit.

HOW TO PUT IT ONLINE (GITHUB PAGES)
-----------------------------------
1. Extract this ZIP on your computer.
2. Go to github.com, sign in and create a new PUBLIC repository,
   such as n5-biology-numeracy. Don't upload pupil details or private files.
3. Use Add file > Upload files and upload index.html, manifest.webmanifest,
   service-worker.js and the icons folder. Keep them in the root.
4. Open Settings > Pages. Under Build and deployment choose
   Deploy from a branch; select main and /(root), then Save.
5. GitHub will show the HTTPS Pages link when deployment is ready.
   Open it on your phone first to check that it works.
6. Post THAT link as a Google Classroom material. Pupils should open it
   in their phone's browser rather than downloading index.html.

ALTERNATIVE: Netlify Drop or Cloudflare Pages can host the same folder over HTTPS.

ON PHONES
---------
iPhone: open the hosted URL in Safari > Share > Add to Home Screen.
Android: open the hosted URL in Chrome > menu > Install app or Add to Home screen.
The app works in the browser without being installed.

IMPORTANT
---------
* Sharing only the manifest JSON will NOT host an app.
* If pupils open the old local HTML and then switch to the hosted site,
  their local progress will NOT move over automatically (different origin).
* Records are stored in localStorage on the device/browser. Clearing site
  data, using private browsing, or moving devices may lose local progress.
* No student answers or personal data are uploaded automatically.
* Offline use works after first successful online loading/cache; not every
  in-app browser supports PWA installation. Safari/Chrome are preferable.
* To force existing app installations to refresh when replacing files,
  increment the CACHE version in service-worker.js and redeploy.
* This PWA does not create a teacher dashboard or synchronise results.
