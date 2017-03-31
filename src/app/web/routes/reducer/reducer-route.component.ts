import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../biz/common/app-store';

@Component({
  selector:    'app-reducer-route',
  templateUrl: './reducer-route.component.html',
  styleUrls:   ['./reducer-route.component.scss']
})
export class ReducerRouteComponent implements OnInit {

  userInfo: any[];

  constructor(private _userInfoStore: Store<AppStore>) {
  }

  ngOnInit() {
    this._userInfoStore.select('user').subscribe((data: any[])=> {
      this.userInfo = data;

      console.log('whahrwahklh!!!', data);
    });
  }

  onClickLogIn() {
    let userInfo = {
      id:    'tahooki',
      name:  '타후키',
      email: 'tahooki@naver.com'
    }
    this._userInfoStore.dispatch({
      type:    'login',
      payload: userInfo
    });
  }


  onClickLogOut() {
    this._userInfoStore.dispatch({type: 'logout'});
  }


}
