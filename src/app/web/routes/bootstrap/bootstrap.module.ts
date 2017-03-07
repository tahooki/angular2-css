import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapHeaderComponent } from './layout/bootstrap-header/bootstrap-header.component';
import { BootstrapAlertComponent } from './layout/bootstrap-alert/bootstrap-alert.component';
import { BootstrapFooterComponent } from './layout/bootstrap-footer/bootstrap-footer.component';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapPhotoModule } from './routes/bootstrap-photo/bootstrap-photo.module';
import { BootstrapLoginModule } from './routes/bootstrap-login/bootstrap-login.module';
import { BootstrapJoinModule } from './routes/bootstrap-join/bootstrap-join.module';
import { BootstrapGuestBookModule } from './routes/bootstrap-guest-book/bootstrap-guest-book.module';
import { BootstrapBoardModule } from './routes/bootstrap-board/bootstrap-board.module';
import { BootstrapComponent } from './bootstrap.component';
import { BootstrapTestComponent } from './routes/bootstrap-test/bootstrap-test.component';
import { BootstrapTestModule } from './routes/bootstrap-test/bootstrap-test.module';

@NgModule({
  imports: [
    CommonModule,
    BootstrapRoutingModule,
    BootstrapLoginModule,
    BootstrapJoinModule,
    BootstrapBoardModule,
    BootstrapPhotoModule,
    BootstrapGuestBookModule,
    BootstrapTestModule
  ],
  declarations: [
    BootstrapComponent,
    BootstrapHeaderComponent,
    BootstrapAlertComponent,
    BootstrapFooterComponent
  ]
})
export class BootstrapModule {
}
