import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWQiTCbAYmxQMBBVN2WzD2J5DYzreMe9A",

  authDomain: "hotels-edbb4.firebaseapp.com",

  databaseURL: "https://hotels-edbb4-default-rtdb.firebaseio.com",

  projectId: "hotels-edbb4",

  storageBucket: "hotels-edbb4.appspot.com",

  messagingSenderId: "942497996246",

  appId: "1:942497996246:web:73ee3a7a2b66b8d2fb1877"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
