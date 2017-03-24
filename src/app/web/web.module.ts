import { NgModule } from '@angular/core';
import { BootstrapRouteModule } from './routes/bootstrap/bootstrap-route.module';
import { IndexRouteModule } from './routes/index/index-route.module';
import { AlertComponent } from './layout/alert/alert.component';
import { FirebaseRouteModule } from './routes/firebase/firebase-route.module';
import { CopycatRouteModule } from './routes/copycat/copycat-route.module';
import { DragulaRouteModule } from './routes/dragula/dragula-route.module';
import { SwipeRouteModule } from './routes/swipe/swipe-route.module';

@NgModule({
  imports: [
    IndexRouteModule,
    BootstrapRouteModule,
    FirebaseRouteModule,
    CopycatRouteModule,
    DragulaRouteModule,
    SwipeRouteModule
  ],
  declarations: [
    AlertComponent,
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
