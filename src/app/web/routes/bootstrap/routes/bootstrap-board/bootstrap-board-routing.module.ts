import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapBoardComponent } from './bootstrap-board.component';
import { BootstrapComponent } from '../../bootstrap.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapComponent,
        children:  [
          {
            path:      'board',
            component: BootstrapBoardComponent,
            outlet:    'bootstrapOutlet'
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapBoardRoutingModule {}
