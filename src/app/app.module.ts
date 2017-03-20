import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WebModule } from './web/web.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './web/layout/header/header.component';
import { AlertModule } from './biz/service/alert/alert.module';
import { FirebaseApiModule } from './biz/service/api/firebase/firebase-api.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WebModule,
    AppRoutingModule,
    AlertModule,
    FirebaseApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
