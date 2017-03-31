import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { UploadRouteComponent } from './upload-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'upload',
        component: UploadRouteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UploadRoutingModule {}
