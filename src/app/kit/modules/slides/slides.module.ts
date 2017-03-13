import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides.component';
import { SlideItemComponent } from './slide-item/slide-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SlidesComponent,
    SlideItemComponent
  ],
  exports: [
    SlidesComponent,
    SlideItemComponent
  ]
})
export class SlidesModule { }
