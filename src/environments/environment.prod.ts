import { initializeApp } from "firebase/app";

export const environment = {
  firebase: {
    projectId: 'topclothes-6d4a6',
    appId: '1:406455321043:web:fc2961e595a892e1082f26',
    storageBucket: 'topclothes-6d4a6.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCGxs7NYkBd2zP_E3DUDYqy04MnzjJtAyM',
    authDomain: 'topclothes-6d4a6.firebaseapp.com',
    messagingSenderId: '406455321043',
    measurementId: 'G-EX8TMST2PQ',
  },
  production: true
};
const app = initializeApp(environment.firebase);
