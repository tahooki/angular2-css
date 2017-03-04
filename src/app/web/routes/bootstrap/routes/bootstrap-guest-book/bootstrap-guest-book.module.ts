import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapGuestBookRoutingModule } from './bootstrap-guest-book-routing.module';
import { BootstrapGuestBookComponent } from './bootstrap-guest-book.component';

@NgModule({
  imports: [
    CommonModule,
    BootstrapGuestBookRoutingModule
  ],
  declarations: [
    BootstrapGuestBookComponent
  ]
})
export class BootstrapGuestBookModule { }
