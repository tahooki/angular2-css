import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapLoginRoutingModule } from './bootstrap-login-routing.module';
import { BootstrapLoginComponent } from './bootstrap-login.component';

@NgModule({
  imports: [
    CommonModule,
    BootstrapLoginRoutingModule
  ],
  declarations: [
    BootstrapLoginComponent
  ]
})
export class BootstrapLoginModule { }
