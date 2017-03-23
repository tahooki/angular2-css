import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexRouteComponent } from './index-route.component';
import { SlidesModule } from '../../../kit/modules/slides/slides.module';

@NgModule({
  imports: [
    CommonModule,
    SlidesModule,
    IndexRoutingModule
  ],
  declarations: [
    IndexRouteComponent
  ]
})
export class IndexRouteModule {
}
/*
 RouterModule.forChild([
 {
 path: '',
 component: IndexRouteComponent,
 redirectTo: '/bootstrap',
 pathMatch: 'full'
 }
 ])
 */
