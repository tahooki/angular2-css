import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap.component';
import { BootstrapLoginComponent } from './routes/bootstrap-login/bootstrap-login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bootstrap',
        component: BootstrapComponent,
        children: [
          {
            path: 'login',
            component: BootstrapLoginComponent,
            outlet: 'bootstrapOutlet'
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BootstrapRoutingModule {

}
