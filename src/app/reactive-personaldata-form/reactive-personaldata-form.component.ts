import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms'; // gebruik ik nog niet

@Component({
  selector: 'app-reactive-personaldata-form',
  templateUrl: './reactive-personaldata-form.component.html',
  styleUrls: ['./reactive-personaldata-form.component.css']
})
export class ReactivePersonaldataFormComponent {

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
   // to do: ese EventEmitter with form value
    console.warn(this.dataForm.value);
 }

}
