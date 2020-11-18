import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey:
    "AIzaSyBr2GYD7ogF-tCX5HW92FIQuaTioAVdvOw" || process.env.REACT_APP_APIKEY,
  authDomain:
    "authtest-developement.firebaseapp.com" || process.env.REACT_APP_AUTHDOMAIN,
  databaseURL:
    "https://authtest-developement.firebaseio.com" ||
    process.env.REACT_APP_DATABASE_URL,
  projectId: "authtest-developement" || process.env.REACT_APP_PROJECT_ID,
  storageBucket:
    "authtest-developement.appspot.com" || process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:
    "526093684361" || process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:
    "1:526093684361:web:9e7e7bccf335031f49c058" || process.env.REACT_APP_ID,
});

export const auth = app.auth();
export default app;
