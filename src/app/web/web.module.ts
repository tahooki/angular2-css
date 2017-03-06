import { NgModule } from '@angular/core';
import { BootstrapModule } from './routes/bootstrap/bootstrap.module';
import { IndexModule } from './routes/index/index.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [
    IndexModule,
    BootstrapModule
  ],
  declarations: [HeaderComponent, FooterComponent]
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
