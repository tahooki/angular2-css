import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginRouteComponent } from './login-route.component';
import { BootstrapRouteComponent } from '../../bootstrap-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapRouteComponent,
        children:  [
          {
            path:      'login',
            component: LoginRouteComponent,
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
export class LoginRoutingModule {
}
