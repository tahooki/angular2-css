import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board-routing.module';
import { BoardRouteComponent } from './board-route.component';

@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule
  ],
  declarations: [
    BoardRouteComponent
  ]
})
export class BoardRouteModule { }
