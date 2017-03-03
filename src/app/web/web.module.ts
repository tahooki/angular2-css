import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { BootstrapModule } from './routes/bootstrap/bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    BootstrapModule
  ],
  declarations: [
    IndexComponent,
  ]
})
export class WebModule {
}
