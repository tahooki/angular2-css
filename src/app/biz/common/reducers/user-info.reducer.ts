import { UserInfo } from '../models/user-info.model';
import { Action } from '@ngrx/store';

import {
  LOG_IN,
  LOG_OUT,
} from './../app-action';

export function userInfoReducer(state: UserInfo[] = [{name:'모',id:'hm',email:'tahotaho@naver.com'}], action: Action): UserInfo[] {
  console.log('ACTION', action.type, action.payload);

  switch(action.type) {
    case LOG_IN:
      state.push(action.payload);``
      console.log('login ', state);
      return state;

    case LOG_OUT:
      state.pop();
      console.log('logout', state);
      return state;

    default:
      return state;
  }
}
