import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseComponent } from './firebase.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'firebase',
        component: FirebaseComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class FirebaseRoutingModule {}
