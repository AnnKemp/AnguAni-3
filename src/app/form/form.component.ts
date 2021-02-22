import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; /* om de form te */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

public secrets=['Your first Pet?', 'Your favorite teacher?']; // hier zit nog iets mis mee :veranderen! moet er this voor of array of . . .
 
// ergens moeten ook de gegevens van de form als een soort array of zo worden opgeslagen om door te sturen naar de server
  submitted = false; 

  private _submitMessage=''; // een lege var te maken

get submitMessage(){
  return this._submitMessage; // om de waarden van het formulier door te sturen via get-functie
}
  
  onSubmit(form: NgForm){
    this.submitted = true; // om de form te verstoppen
    this._submitMessage=JSON.stringify(form.value); // om de waarden van het formulier te tonen
    

    // this is for testing if the form works:
    //console.log('Submitted!'); // to test if it works! Calling the onSubmit method from the form by clicking the submit button (F12)
    //console.log(form); in combinatie met onSubmit(form: NgForm)
  }
}
