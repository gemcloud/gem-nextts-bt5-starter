## Get started hosting a static website

https://www.section.io/engineering-education/introduction-to-nextjs-with-typescript-and-firebase-database/

### Step 1 - Configured Firebase project on Firebase console "gem-portfolio-blog"

Open Firebase console(https://firebase.google.com/) - Sign-In using Google account - Create New Project - Dashboard
"gem-portfolio-blog"

Configure Google Analytics : "gemcloudSEOTesting"

### Step 2 - "Realtime Database"

- create /GemDemoData/nextjs-firebase-blog/data.json
- import data.sjon into firebase

### Step 3 - configure my nextjs

https://www.section.io/engineering-education/introduction-to-nextjs-with-typescript-and-firebase-database/

create next-typescript project > npx create-next-app@latest --ts your-app-name

```
 to install the Firebase package.
>npm install firebase
```

### Step 4 - Let’s start by integrating Firebase and adding TypeScript.

on firebase

1. Go to your project settings in the Firebase console.
2. Scroll to the bottom of the page where it says "Your apps."
3. Click the "</>" button to register your app for web.
4. For "App nickname", enter nextjs-firebase-blog.
5. Click the "Register app" button and keep this page open.
6. Add a .env file in the root of the project and paste your apiKey, databaseURL, and projectId in the correct places:
7. copy firebase codes to "./firebase/clientApp.ts"

### Step 5 - call firebase and shown on app.

writing from V8 to V9 change!!!!
