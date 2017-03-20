import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseApiService } from './firebase-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    FirebaseApiService
  ]
})
export class FirebaseApiModule { }
