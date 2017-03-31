import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../app-store';
import { UserInfo } from '../models/user-info.model';

import { LOG_IN, LOG_OUT, UPDATE_USER_EMAIL, UPDATE_USER_NAME } from '../app-action';

@Injectable()
export class action {

  constructor(private _store: Store<AppStore>) {
  }

  login(payload: UserInfo) {
    this._store.dispatch({
      type: LOG_IN,
      payload: payload
    })
  }

  logout(payload: UserInfo) {
    this._store.dispatch({
      type: LOG_OUT,
      payload: payload
    })
  }

}
