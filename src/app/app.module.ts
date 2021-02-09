import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { YellowComponent } from './yellow/yellow.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StatussliderComponent } from './statusslider/statusslider.component';
import { FlyInOutComponent } from './fly-in-out/fly-in-out.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    YellowComponent,
    PagenotfoundComponent,
    StatussliderComponent,
    FlyInOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
