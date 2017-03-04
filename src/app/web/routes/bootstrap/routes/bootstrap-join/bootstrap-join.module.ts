import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapJoinRoutingModule } from './bootstrap-join-routing.module';
import { BootstrapJoinComponent } from './bootstrap-join.component';

@NgModule({
  imports: [
    CommonModule,
    BootstrapJoinRoutingModule
  ],
  declarations: [
    BootstrapJoinComponent
  ]
})
export class BootstrapJoinModule { }
