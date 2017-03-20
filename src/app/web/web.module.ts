import { NgModule } from '@angular/core';
import { BootstrapModule } from './routes/bootstrap/bootstrap.module';
import { IndexModule } from './routes/index/index.module';
import { StudyModule } from './routes/study/study.module';
import { AlertComponent } from './layout/alert/alert.component';
import { FirebaseModule } from './routes/firebase/firebase.module';
import { TestModule } from './routes/test/test.module';
import { CopycatModule } from './routes/copycat/copycat.module';
import { DragulaModule } from './routes/dragula/dragula.module';

@NgModule({
  imports: [
    IndexModule,
    BootstrapModule,
    StudyModule,
    TestModule,
    FirebaseModule,
    CopycatModule,
    DragulaModule
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
