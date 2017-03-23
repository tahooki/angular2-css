import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapHeaderComponent } from './layout/bootstrap-header/bootstrap-header.component';
import { BootstrapAlertComponent } from './layout/bootstrap-alert/bootstrap-alert.component';
import { BootstrapFooterComponent } from './layout/bootstrap-footer/bootstrap-footer.component';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { PhotoRouteModule } from './routes/photo/photo-route.module';
import { LoginRouteModule } from './routes/login/login-route.module';
import { JoinRouteModule } from './routes/join/join-route.module';
import { GuestbookRouteModule } from './routes/guest-book/guestbook-route.module';
import { BoardRouteModule } from './routes/board/board-route.module';
import { BootstrapRouteComponent } from './bootstrap-route.component';
import { TestRouteModule } from './routes/test/test-route.module';

@NgModule({
  imports: [
    CommonModule,
    BootstrapRoutingModule,
    LoginRouteModule,
    JoinRouteModule,
    BoardRouteModule,
    PhotoRouteModule,
    GuestbookRouteModule,
    TestRouteModule
  ],
  declarations: [
    BootstrapRouteComponent,
    BootstrapHeaderComponent,
    BootstrapAlertComponent,
    BootstrapFooterComponent
  ]
})
export class BootstrapRouteModule {
}
