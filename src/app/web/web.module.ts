import { NgModule } from '@angular/core';
import { BootstrapModule } from './routes/bootstrap/bootstrap.module';
import { IndexModule } from './routes/index/index.module';
import { StudyComponent } from './routes/study/study.component';
import { StudyModule } from './routes/study/study.module';
import { SlidesModule } from 'ng2-slides/dist';

@NgModule({
  imports: [
    IndexModule,
    BootstrapModule,
    SlidesModule,
    StudyModule
  ],
  declarations: [StudyComponent],
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
