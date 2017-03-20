import { NgModule } from '@angular/core';
import { BootstrapModule } from './routes/bootstrap/bootstrap.module';
import { IndexModule } from './routes/index/index.module';
import { StudyModule } from './routes/study/study.module';
import { AlertComponent } from './layout/alert/alert.component';
import { FirebaseModule } from './routes/firebase/firebase.module';

@NgModule({
  imports: [
    IndexModule,
    BootstrapModule,
    StudyModule,
    FirebaseModule
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
