import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReducerRouteComponent } from './reducer-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'reducer',
        component: ReducerRouteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ReducerRoutingModule {}
