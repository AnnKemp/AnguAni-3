import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms'; // gebruik ik nog niet

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
    })
  });

 constructor(private fb: FormBuilder){}

 onSubmit(){
   // to do: use EventEmitter to keep the form encapsulated and to provide the form value outside the component
    console.warn(this.dataForm.value); // to log a message to the browser console
 }

}
