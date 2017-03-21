import {  Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class FirebaseApiService {

  constructor(private _fireBase:AngularFire) {
  }

  getItems(): any {
    return this._fireBase.database.list('/list');
  }
}
