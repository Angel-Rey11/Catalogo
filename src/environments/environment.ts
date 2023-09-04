// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
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
  
  production: false
};
const app = initializeApp(environment.firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
