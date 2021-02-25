import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

skills = ['Angular', 'React', 'PHP', 'C#'];

model = new Hero(52, 'unemployed, this.skills[0], 'Front-end Developer');

// the following code creates a new hero instance, so that the initial form can show an example hero
const myHero = new Hero( 42, 'couchHero',
'CSS-specialist',
'Old-school-Webdesigner'
);
console.log('My hero is called ' + myHero.name); 


submitted = false; // wanneer form niet verstuurd
 
 onSubmit(){this.submitted = true}; // wanneer form verstuurd
  // todo: remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); } 

}
