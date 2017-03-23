import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuestbookRouteComponent } from './guestbook-route.component';
import { BootstrapRouteComponent } from '../../bootstrap-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapRouteComponent,
        children:  [
          {
            path:      'guestbook',
            component: GuestbookRouteComponent,
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
export class GuestbookRoutingModule {}
