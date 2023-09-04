// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
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
  
  production: false
};
const app = initializeApp(environment.firebase);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
