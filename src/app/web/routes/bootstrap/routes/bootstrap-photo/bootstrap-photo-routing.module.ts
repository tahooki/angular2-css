import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapPhotoComponent } from './bootstrap-photo.component';
import { BootstrapComponent } from '../../bootstrap.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapComponent,
        children:  [
          {
            path:      'photo',
            component: BootstrapPhotoComponent,
            outlet:    'bootstrapOutlet'
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapPhotoRoutingModule {}
