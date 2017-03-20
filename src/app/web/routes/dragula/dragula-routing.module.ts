import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { DragulaComponent } from './dragula.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'dragula',
        component: DragulaComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DragulaRoutingModule {}
