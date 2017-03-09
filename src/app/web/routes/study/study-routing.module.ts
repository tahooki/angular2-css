import { NgModule } from '@angular/core';
import { StudyComponent } from './study.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'study',
        component: StudyComponent
      }
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class StudyRoutingModule { }
