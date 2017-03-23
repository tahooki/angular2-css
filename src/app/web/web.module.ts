import { NgModule } from '@angular/core';
import { BootstrapRouteModule } from './routes/bootstrap/bootstrap-route.module';
import { IndexRouteModule } from './routes/index/index-route.module';
import { AlertComponent } from './layout/alert/alert.component';
import { FirebaseRouteModule } from './routes/firebase/firebase-route.module';
import { TestRouteModule } from './routes/test/test-route.module';
import { CopycatRouteModule } from './routes/copycat/copycat-route.module';
import { DragulaRouteModule } from './routes/dragula/dragula-route.module';

@NgModule({
  imports: [
    IndexRouteModule,
    BootstrapRouteModule,
    TestRouteModule,
    FirebaseRouteModule,
    CopycatRouteModule,
    DragulaRouteModule
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
 component: IndexRouteComponent,
 redirectTo: '/bootstrap',
 pathMatch: 'full'
 }
 ])
 */
