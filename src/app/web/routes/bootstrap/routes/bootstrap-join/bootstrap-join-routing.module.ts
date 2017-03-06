import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapJoinComponent } from './bootstrap-join.component';
import { BootstrapComponent } from '../../bootstrap.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapComponent,
        children:  [
          {
            path:      'join',
            component: BootstrapJoinComponent,
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
export class BootstrapJoinRoutingModule {}
