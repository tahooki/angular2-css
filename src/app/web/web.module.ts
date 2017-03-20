import { NgModule } from '@angular/core';
import { BootstrapModule } from './routes/bootstrap/bootstrap.module';
import { IndexModule } from './routes/index/index.module';
import { StudyModule } from './routes/study/study.module';
import { AlertComponent } from './layout/alert/alert.component';
import { FirebaseModule } from './routes/firebase/firebase.module';
import { TestComponent } from './routes/test/test.component';
import { TestModule } from './routes/test/test.module';

@NgModule({
  imports: [
    IndexModule,
    BootstrapModule,
    StudyModule,
    TestModule,
    FirebaseModule
  ],
  declarations: [
    AlertComponent,
    TestComponent
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
