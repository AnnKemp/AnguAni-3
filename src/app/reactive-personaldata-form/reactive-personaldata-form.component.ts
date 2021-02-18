import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { FormBuilder } from '@angular/forms'; // service: import via constructor
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms'; // for dynamic forms, with unknown controls:(form children)

@Component({
  selector: 'app-reactive-personaldata-form',
  templateUrl: './reactive-personaldata-form.component.html',
  styleUrls: ['./reactive-personaldata-form.component.css']
})
export class ReactivePersonaldataFormComponent {
// the FormBuilder service has three methods: control(), group() and array(), these are factory methods for generating instances in you component classes
  dataForm=this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street:[''],
      city:[''],
      state:[''],
      zip:['']
    }),
    aliases: this.fb.array([ // add via the aliases the form array with unknown controls, from zero till ...     
      this.fb.control('') // the aliases control in the form group instance is now populated with a single control until more controls are added dynamically
      ]) 
  });

  get aliases(){ // get the abstract form controls
    return this.dataForm.get('aliases') as FormArray;
  }
addAlias(){ // dynamically insert an alias control into the alias's form array
  this.aliases.push(this.fb.control('')); // the FormArray.push() method inserts the control as a new item in the array
} // in the template, each control is displayed as a separate input field

 constructor(private fb: FormBuilder){}

 onSubmit(){
   // to do: use EventEmitter to keep the form encapsulated and to provide the form value outside the component
    console.warn(this.dataForm.value); // to log the form values to the browser console
 }

}
