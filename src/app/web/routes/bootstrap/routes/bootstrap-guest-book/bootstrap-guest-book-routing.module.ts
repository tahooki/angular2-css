import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapGuestBookComponent } from './bootstrap-guest-book.component';
import { BootstrapComponent } from '../../bootstrap.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapComponent,
        children:  [
          {
            path:      'guest',
            component: BootstrapGuestBookComponent,
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
export class BootstrapGuestBookRoutingModule {}
