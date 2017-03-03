import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapHeaderComponent } from './layout/bootstrap-header/bootstrap-header.component';
import { BootstrapAlertComponent } from './layout/bootstrap-alert/bootstrap-alert.component';
import { BootstrapFooterComponent } from './layout/bootstrap-footer/bootstrap-footer.component';
import { BootstrapGuestBookComponent } from './routes/bootstrap-guest-book/bootstrap-guest-book.component';
import { BootstrapBoardComponent } from './routes/bootstrap-board/bootstrap-board.component';
import { BootstrapPhotoComponent } from './routes/bootstrap-photo/bootstrap-photo.component';
import { BootstrapLoginComponent } from './routes/bootstrap-login/bootstrap-login.component';
import { BootstrapJoinComponent } from './routes/bootstrap-join/bootstrap-join.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BootstrapHeaderComponent, BootstrapAlertComponent, BootstrapFooterComponent, BootstrapGuestBookComponent, BootstrapBoardComponent, BootstrapPhotoComponent, BootstrapLoginComponent, BootstrapJoinComponent]
})
export class BootstrapModule { }
