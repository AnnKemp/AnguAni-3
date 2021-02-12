import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; /* om de form te */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  constructor() { }

  onSubmit(form: NgForm){
    //console.log('Submitted!'); // to test if it works! Calling the onSubmit method from the form by clicking the submit button (F12)
    //console.log(form); in combinatie met onSubmit(form: NgForm)
  }
}
