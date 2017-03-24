import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipeRouteComponent } from './swipe-route.component';
import { SwipeRoutingModule } from './swipe-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SwipeRoutingModule
  ],
  declarations: [
    SwipeRouteComponent
  ]
})
export class SwipeRouteModule { }
