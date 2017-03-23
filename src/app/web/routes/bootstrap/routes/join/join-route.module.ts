import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinRoutingModule } from './join-routing.module';
import { JoinRouteComponent } from './join-route.component';

@NgModule({
  imports: [
    CommonModule,
    JoinRoutingModule
  ],
  declarations: [
    JoinRouteComponent
  ]
})
export class JoinRouteModule { }
