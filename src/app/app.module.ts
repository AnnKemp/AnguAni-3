import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { TemplateObjectComponent } from './template-object/template-object.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpEventsComponent } from './exp-events/exp-events.component';

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
    ReactivePersonaldataFormComponent,
    TemplateObjectComponent,
    HeroFormComponent,
    ExpEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
