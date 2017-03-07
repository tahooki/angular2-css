import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapTestRoutingModule } from './bootstrap-test-routing.module';
import { BootstrapTestComponent } from './bootstrap-test.component';

@NgModule({
  imports: [
    CommonModule,
    BootstrapTestRoutingModule
  ],
  declarations: [
    BootstrapTestComponent
  ]
})
export class BootstrapTestModule { }
