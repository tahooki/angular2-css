import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaRoutingModule } from './dragula-routing.module';
import { DragulaRouteComponent } from './dragula-route.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    DragulaRoutingModule
  ],
  declarations: [
    DragulaRouteComponent
  ]
})
export class DragulaRouteModule { }
