import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapBoardComponent } from './bootstrap-board.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bootstrap/board',
        component: BootstrapBoardComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapBoardRoutingModule {}
