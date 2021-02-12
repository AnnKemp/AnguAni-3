import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YellowComponent } from './yellow/yellow.component';
import { RedComponent } from './red/red.component';
import { StatussliderComponent } from './statusslider/statusslider.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FlyInOutComponent } from './fly-in-out/fly-in-out.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  { path: 'yellow-component', component: YellowComponent },
  { path: 'red-component', component: RedComponent },
  { path: 'statusslider-component', component: StatussliderComponent },
  { path: 'fly-in-out-component', component: FlyInOutComponent },
  { path: 'reactive-form-component', component: ReactiveFormComponent },
  { path: '', redirectTo: '/yellow-component', pathMatch: 'full'}, // als het pad niet ingevuld wordt of zo naar de startpagina doorverwijzen
  { path: '**', component: PagenotfoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
