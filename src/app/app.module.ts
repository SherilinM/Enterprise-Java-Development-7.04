import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './mainBox/app-routing.module';
import { MainBoxComponent } from './mainBox/mainBox.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
