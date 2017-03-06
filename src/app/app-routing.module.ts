import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapComponent } from './web/routes/bootstrap/bootstrap.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'bootstrap',
        component: BootstrapComponent,
        outlet: ''
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
