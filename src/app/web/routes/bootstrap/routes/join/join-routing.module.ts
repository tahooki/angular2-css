import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { JoinRouteComponent } from './join-route.component';
import { BootstrapRouteComponent } from '../../bootstrap-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapRouteComponent,
        children:  [
          {
            path:      'join',
            component: JoinRouteComponent,
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
export class JoinRoutingModule {}
