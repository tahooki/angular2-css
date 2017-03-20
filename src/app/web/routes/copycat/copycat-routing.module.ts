import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { CopycatComponent } from './copycat.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'copycat',
        component: CopycatComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CopycatRoutingModule {}
