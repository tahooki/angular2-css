import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { DragulaRouteComponent } from './dragula-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'dragula',
        component: DragulaRouteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DragulaRoutingModule {}
