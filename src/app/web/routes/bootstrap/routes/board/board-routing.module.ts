import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardRouteComponent } from './board-route.component';
import { BootstrapRouteComponent } from '../../bootstrap-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapRouteComponent,
        children:  [
          {
            path:      'board',
            component: BoardRouteComponent,
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
export class BoardRoutingModule {}
