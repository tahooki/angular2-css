import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapPhotoRoutingModule } from './bootstrap-photo-routing.module';
import { BootstrapPhotoComponent } from './bootstrap-photo.component';

@NgModule({
  imports: [
    CommonModule,
    BootstrapPhotoRoutingModule
  ],
  declarations: [
    BootstrapPhotoComponent
  ]
})
export class BootstrapPhotoModule { }
