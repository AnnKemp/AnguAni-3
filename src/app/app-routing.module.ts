import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YellowComponent } from './yellow/yellow.component';
import { RedComponent } from './red/red.component';

const routes: Routes = [
  { path: 'yellow-component', component: YellowComponent },
  { path: 'red-component', component: RedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
