import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexRouteComponent } from './index-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      '',
        component: IndexRouteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class IndexRoutingModule {}
