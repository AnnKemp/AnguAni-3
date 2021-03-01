
import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

skills = ['Angular', 'React', 'PHP', 'C#'];

model = new Hero(52, 'Dr. IQ', this.skills[0], 'Front-end Developer');

submitted = false; // when form not send
 
 onSubmit(){this.submitted = true}; // when form send
  // todo: remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); } // nog uitzoeken wat diagnostic is

  newHero(){
    this.model = new Hero(42, '', '');
  }
 
}
