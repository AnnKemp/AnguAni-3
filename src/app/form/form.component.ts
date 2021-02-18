import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; /* om de form te */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

secrets=['Your first Pet?', 'Your favorite teacher?']; // hier zit nog iets mis mee :veranderen!
username="Please, enter your username"; // hier zit nog iets mis mee: veranderen! moet var of eigenschap zijn, heb this. al geprobeert maar pakt niet ....

  submitted = false; 

  onSubmit(){
    this.submitted = true; // om de form te verstoppen

    //console.log('Submitted!'); // to test if it works! Calling the onSubmit method from the form by clicking the submit button (F12)
    //console.log(form); in combinatie met onSubmit(form: NgForm)
  }
}
