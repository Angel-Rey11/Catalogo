import { initializeApp } from "firebase/app";

export const environment = {
firebaseConfig : {
  apiKey: "AIzaSyAoV58gKEBY6S_pf7VtTYV_9dDmT3b8YXk",
  authDomain: "topclothesdq.firebaseapp.com",
  projectId: "topclothesdq",
  storageBucket: "topclothesdq.appspot.com",
  messagingSenderId: "262199491279",
  appId: "1:262199491279:web:fa783ed3ea85609e3215ba",
  measurementId: "G-PD75BXE5S8"
},
  production: true
};
const app = initializeApp(environment.firebaseConfig);
