import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx6zMF9PgEVLMtmU7xqkVOSIMdv7Ay2cY",
  authDomain: "portal-c4601.firebaseapp.com",
  projectId: "portal-c4601",
  storageBucket: "portal-c4601.appspot.com",
  messagingSenderId: "1096799778775",
  appId: "1:1096799778775:web:d376a8efc5498434d53d92",
  measurementId: "G-DEW3P34411",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const getUserToken = () => {
  return auth.currentUser.accessToken;
};
export default app;
