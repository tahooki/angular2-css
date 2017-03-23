import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { CopycatRouteComponent } from './copycat-route.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'copycat',
        component: CopycatRouteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CopycatRoutingModule {

}
