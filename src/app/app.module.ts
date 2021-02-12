import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { YellowComponent } from './yellow/yellow.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StatussliderComponent } from './statusslider/statusslider.component';
import { FlyInOutComponent } from './fly-in-out/fly-in-out.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactivePersonaldataFormComponent } from './reactive-personaldata-form/reactive-personaldata-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    YellowComponent,
    PagenotfoundComponent,
    StatussliderComponent,
    FlyInOutComponent,
    FormComponent,
    ReactiveFormComponent,
    ReactivePersonaldataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
