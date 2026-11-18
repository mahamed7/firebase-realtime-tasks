import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase web configuration is read from environment variables.
// Copy .env.example to .env and fill in the values from the Firebase console.
// Note: these client values are not secrets on their own (they ship inside the
// app), so data must be protected by Realtime Database security rules.
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL || undefined,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.warn(
    "Firebase config is missing. Copy .env.example to .env and restart Expo."
  );
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, app };
