import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReducerRouteComponent } from './reducer-route.component';
import { ReducerRoutingModule } from './reducer-routing.module';
import { userInfoReducer } from '../../../biz/common/reducers/user-info.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({ user: userInfoReducer }),
    ReducerRoutingModule
  ],
  declarations: [
    ReducerRouteComponent
  ]
})
export class ReducerRouteModule { }
