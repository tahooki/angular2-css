import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadRouteComponent } from './upload-route.component';
import { UploadRoutingModule } from './upload-routing.module';
import { THKFileDropDirective } from '../../../kit/directives/file-drop.directive';

@NgModule({
  imports:      [
    CommonModule,
    UploadRoutingModule
  ],
  declarations: [
    UploadRouteComponent,
    THKFileDropDirective
  ]
})
export class UploadRouteModule {
}
