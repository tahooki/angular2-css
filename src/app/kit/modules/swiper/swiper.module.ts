import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { THKSwiperComponent } from './swiper.component';
import { THKSlideComponent } from './slide/slide.component';

@NgModule({
  imports:      [
    CommonModule
  ],
  declarations: [
    THKSwiperComponent,
    THKSlideComponent
  ],
  exports: [
    THKSwiperComponent,
    THKSlideComponent
  ]
})
export class THKSwiperModule {
}
