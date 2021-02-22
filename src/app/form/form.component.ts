import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; /* om de form te */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

secrets=['Your first Pet?', 'Your favorite teacher?']; // hier zit nog iets mis mee :veranderen! moet er this voor of array of . . .
 
// ergens moeten ook de gegevens van de form als een soort array of zo worden opgeslagen om door te sturen naar de server
  submitted = false; 

  onSubmit(){
    this.submitted = true; // om de form te verstoppen

    // this is for testing if the form works:
    //console.log('Submitted!'); // to test if it works! Calling the onSubmit method from the form by clicking the submit button (F12)
    //console.log(form); in combinatie met onSubmit(form: NgForm)
  }
}
