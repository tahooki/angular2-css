import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaRoutingModule } from './dragula-routing.module';
import { DragulaComponent } from './dragula.component';

@NgModule({
  imports: [
    CommonModule,
    DragulaRoutingModule
  ],
  declarations: [
    DragulaComponent
  ]
})
export class DragulaModule { }
