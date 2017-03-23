import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotoRouteComponent } from './photo-route.component';
import { BootstrapRouteComponent } from '../../bootstrap-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapRouteComponent,
        children:  [
          {
            path:      'photo',
            component: PhotoRouteComponent,
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
export class PhotoRoutingModule {}
