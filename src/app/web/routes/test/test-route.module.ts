import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { TestRouteComponent } from './test-route.component';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [
    TestRouteComponent
  ]
})
export class TestRouteModule { }
