import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCqfh02i5HKIJvilDkr9AxmiPhF4y2_NnA",
  authDomain: "raft-feed-42365.firebaseapp.com",
  projectId: "raft-feed-42365",
  storageBucket: "raft-feed-42365.appspot.com",
  messagingSenderId: "18699791061",
  appId: "1:18699791061:web:f7d4cad066f9d2a7acd05c",
  measurementId: "G-9065J3JJD3"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;

