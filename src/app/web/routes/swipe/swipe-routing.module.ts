import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwipeRouteComponent } from './swipe-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'swipe',
        component: SwipeRouteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SwipeRoutingModule {}
