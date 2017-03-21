import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseApiService } from './firebase-api.service';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBsYQ0nRTaxl-i6Y9YcJHiqHmZzZis49ww",
  authDomain: "test-7c717.firebaseapp.com",
  databaseURL: "https://test-7c717.firebaseio.com",
  storageBucket: "test-7c717.appspot.com",
  messagingSenderId: "619120605606"
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    FirebaseApiService
  ]
})
export class FirebaseApiModule { }
