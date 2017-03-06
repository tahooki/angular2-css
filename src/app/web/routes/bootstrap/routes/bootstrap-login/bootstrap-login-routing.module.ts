import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapLoginComponent } from './bootstrap-login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        component: BootstrapLoginComponent,
        outlet: 'a'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapLoginRoutingModule {}
