import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseComponent } from './firebase.component';
import { FirebaseRoutingModule } from './firebase-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FirebaseRoutingModule
  ],
  declarations: [
    FirebaseComponent
  ]
})
export class FirebaseModule { }
