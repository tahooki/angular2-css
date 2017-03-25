import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipeRouteComponent } from './swipe-route.component';
import { SwipeRoutingModule } from './swipe-routing.module';
import { THKSwiperModule } from '../../../kit/modules/swiper/swiper.module';

@NgModule({
  imports: [
    CommonModule,
    THKSwiperModule,
    SwipeRoutingModule
  ],
  declarations: [
    SwipeRouteComponent
  ]
})
export class SwipeRouteModule { }
