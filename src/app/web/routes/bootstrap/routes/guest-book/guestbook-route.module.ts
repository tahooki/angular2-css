import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestbookRoutingModule } from './guestbook-routing.module';
import { GuestbookRouteComponent } from './guestbook-route.component';

@NgModule({
  imports: [
    CommonModule,
    GuestbookRoutingModule
  ],
  declarations: [
    GuestbookRouteComponent
  ]
})
export class GuestbookRouteModule { }
