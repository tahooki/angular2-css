import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopycatComponent } from './copycat.component';
import { CopycatRoutingModule } from './copycat-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CopycatRoutingModule
  ],
  declarations: [
    CopycatComponent
  ]
})
export class CopycatModule { }
