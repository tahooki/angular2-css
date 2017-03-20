import { NgModule } from '@angular/core';
import { BootstrapModule } from './routes/bootstrap/bootstrap.module';
import { IndexModule } from './routes/index/index.module';
import { StudyModule } from './routes/study/study.module';
import { AlertComponent } from './layout/alert/alert.component';

@NgModule({
  imports: [
    IndexModule,
    BootstrapModule,
    StudyModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: []
})
export class WebModule {
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
