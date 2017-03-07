import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BootstrapComponent } from '../../bootstrap.component';
import { BootstrapTestComponent } from './bootstrap-test.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:      'bootstrap',
        component: BootstrapComponent,
        children:  [
          {
            path:      'test',
            component: BootstrapTestComponent,
            outlet:    'bootstrapOutlet'
          }
        ]
      }
    ])
  ],
  declarations: []
})
export class BootstrapTestRoutingModule { }
