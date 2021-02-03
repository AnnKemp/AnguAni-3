import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { YellowComponent } from './yellow/yellow.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    YellowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
