import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { THKFileUploadComponent } from './file-upload.component';
import { FileDropDirective } from './file-drop.directve';

@NgModule({
  imports:      [
    CommonModule
  ],
  declarations: [
    THKFileUploadComponent,
    FileDropDirective
  ],
  exports:      [
    THKFileUploadComponent
  ]
})
export class THKFileUploadModule {
}
