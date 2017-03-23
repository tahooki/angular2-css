import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopycatRouteComponent } from './copycat-route.component';
import { CopycatRoutingModule } from './copycat-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CopycatRoutingModule
  ],
  declarations: [
    CopycatRouteComponent
  ]
})
export class CopycatRouteModule { }
