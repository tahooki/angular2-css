import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseRouteComponent } from './firebase-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'firebase',
        component: FirebaseRouteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class FirebaseRoutingModule {}
