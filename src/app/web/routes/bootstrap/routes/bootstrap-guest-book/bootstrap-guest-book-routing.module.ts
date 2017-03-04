import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapGuestBookComponent } from './bootstrap-guest-book.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bootstrap/guestbook',
        component: BootstrapGuestBookComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapGuestBookRoutingModule {}
