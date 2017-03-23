import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapRouteComponent } from './bootstrap-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapRouteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapRoutingModule {

}
