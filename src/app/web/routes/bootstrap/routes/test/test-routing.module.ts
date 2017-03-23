import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BootstrapRouteComponent } from '../../bootstrap-route.component';
import { TestRouteComponent } from './test-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapRouteComponent,
        children:  [
          {
            path:      'test',
            component: TestRouteComponent,
            outlet:    'bootstrapOutlet'
          }
        ]
      }
    ])
  ],
  declarations: []
})
export class TestRoutingModule { }
