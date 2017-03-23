import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestRouteComponent } from './test-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'test',
        component: TestRouteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TestRoutingModule {}
