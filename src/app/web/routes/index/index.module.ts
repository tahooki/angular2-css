import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SlidesModule } from '../../../kit/modules/slides/slides.module';

@NgModule({
  imports: [
    CommonModule,
    SlidesModule,
    IndexRoutingModule
  ],
  declarations: [
    IndexComponent
  ]
})
export class IndexModule {
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
