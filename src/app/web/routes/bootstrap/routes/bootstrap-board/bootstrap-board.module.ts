import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapBoardRoutingModule } from './bootstrap-board-routing.module';
import { BootstrapBoardComponent } from './bootstrap-board.component';

@NgModule({
  imports: [
    CommonModule,
    BootstrapBoardRoutingModule
  ],
  declarations: [
    BootstrapBoardComponent
  ]
})
export class BootstrapBoardModule { }
