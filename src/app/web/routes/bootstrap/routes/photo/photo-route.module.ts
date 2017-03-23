import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoRouteComponent } from './photo-route.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoRoutingModule
  ],
  declarations: [
    PhotoRouteComponent
  ]
})
export class PhotoRouteModule { }
