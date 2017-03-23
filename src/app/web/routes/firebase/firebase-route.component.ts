import { Component, OnInit } from '@angular/core';
import { FirebaseApiService } from '../../../biz/service/api/firebase/firebase-api.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase-route.component.html',
  styleUrls: ['./firebase-route.component.scss']
})
export class FirebaseRouteComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  write: FirebaseObjectObservable<any>;

  constructor(
    // private _firebaseApi: FirebaseApiService
    private _af: AngularFire
  ) { }

  ngOnInit() {
    this.items = this._af.database.list('/list');

    this.write = this._af.database.object('/list', { preserveSnapshot: true });

    // this.write.set({name : '홍길동'});

    // this.items.push({name : '홍길동'});


    this.write.subscribe(snapshot => {
      console.log(snapshot.key)
      console.log(snapshot.value)
    });
  }

}
