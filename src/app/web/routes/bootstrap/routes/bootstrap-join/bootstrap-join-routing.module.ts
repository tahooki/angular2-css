import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapJoinComponent } from './bootstrap-join.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bootstrap/join',
        component: BootstrapJoinComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapJoinRoutingModule {}
