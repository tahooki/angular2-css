import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { WebRoutingModule } from './web-routing.module';
import { BootstrapModule } from './routes/bootstrap/bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    WebRoutingModule,
    BootstrapModule
  ],
  declarations: [
    IndexComponent,
  ]
})
export class WebModule {
}
/*
 RouterModule.forChild([
 {
 path: '',
 component: IndexComponent,
 redirectTo: '/bootstrap',
 pathMatch: 'full'
 }
 ])
 */
