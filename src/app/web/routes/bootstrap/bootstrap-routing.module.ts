import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bootstrap',
        component: BootstrapComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapRoutingModule {

}
