import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapLoginComponent } from './bootstrap-login.component';
import { BootstrapComponent } from '../../bootstrap.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapComponent,
        children:  [
          {
            path:      'login',
            component: BootstrapLoginComponent,
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
export class BootstrapLoginRoutingModule {
}
