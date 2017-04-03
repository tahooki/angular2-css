import { Component, OnInit } from '@angular/core';
import { FirebaseApiService } from '../../../biz/service/api/firebase/firebase-api.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector:    'app-firebase',
  templateUrl: './firebase-route.component.html',
  styleUrls:   ['./firebase-route.component.scss']
})
export class FirebaseRouteComponent implements OnInit {

  loginUser: any;

  movieList$: any;

  items: FirebaseListObservable<any[]>;

  write: FirebaseObjectObservable<any>;

  constructor(// private _firebaseApi: FirebaseApiService
              private _af: AngularFire,) {
  }

  ngOnInit() {
    this.items = this._af.database.list('/list');
    this.write = this._af.database.object('/list', {preserveSnapshot: true});

    // this.write.set({name : '홍길동'});
    // this.items.push({name : '홍길동'});
    // this.write.subscribe(snapshot => {
    //   console.log(snapshot.key)
    //   console.log(snapshot.value)
    // });



    let authConfig: any = {
      method:   0,
      provider: 3
    }

    this._af.auth.subscribe((data) => {
      if (data) {
        this.loginUser = data;
        this.movieList$ = this._af.database.list('/movie-list');
        console.log(this.movieList$);
      } else {
        this.loginUser = null;
        this._af.auth.login(authConfig).then(data => {
          console.log(data);
          this.movieList$ = this._af.database.list('/movie-list');
          console.log(this.movieList$);
        });
      }
    })


  }

  onClickLoginPopup() {

  }

  onSaveMovieName(movieName) {
    console.log(movieName);
    this.movieList$.push({movieName : movieName});
  }

  updateMovie(key, movieName) {
    this.movieList$.update(key,{movieName : movieName});
  }

  deleteMovie(key) {
    this.movieList$.remove(key);
  }
}

/*
 login(config?: AuthConfiguration): firebase.Promise<FirebaseAuthState>;
 login(credentials?: EmailPasswordCredentials | firebase.auth.AuthCredential | string): firebase.Promise<FirebaseAuthState>;
 login(credentials: EmailPasswordCredentials | firebase.auth.AuthCredential | string, config?: AuthConfiguration): firebase.Promise<FirebaseAuthState>;
 logout(): Promise<void>;
 getAuth(): FirebaseAuthState;
 createUser(credentials: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState>;

 export declare enum AuthProviders {
 Github = 0,
 Twitter = 1,
 Facebook = 2,
 Google = 3,
 Password = 4,
 Anonymous = 5,
 Custom = 6,
 }
 export declare enum AuthMethods {
 Popup = 0,
 Redirect = 1,
 Anonymous = 2,
 Password = 3,
 OAuthToken = 4,
 CustomToken = 5,
 }
 export interface AuthConfiguration {
 method?: AuthMethods;
 provider?: AuthProviders;
 scope?: string[];
 }
 export interface FirebaseAuthState {
 uid: string;
 provider: AuthProviders;
 auth: firebase.User;
 expires?: number;
 github?: firebase.UserInfo;
 google?: firebase.UserInfo;
 twitter?: firebase.UserInfo;
 facebook?: firebase.UserInfo;
 anonymous?: boolean;
 }
 export declare function authDataToAuthState(authData: firebase.User, providerData?: firebase.UserInfo): FirebaseAuthState;
 export declare function stripProviderId(providerId: string): string;
 export interface EmailPasswordCredentials {
 email: string;
 password: string;
 }

 */
