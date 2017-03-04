import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapPhotoComponent } from './bootstrap-photo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bootstrap/photo',
        component: BootstrapPhotoComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapPhotoRoutingModule {}
