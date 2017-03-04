import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapLoginComponent } from './bootstrap-login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bootstrap/login',
        component: BootstrapLoginComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapLoginRoutingModule {}
