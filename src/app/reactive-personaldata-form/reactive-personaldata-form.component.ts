import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-personaldata-form',
  templateUrl: './reactive-personaldata-form.component.html',
  styleUrls: ['./reactive-personaldata-form.component.css']
})
export class ReactivePersonaldataFormComponent {
  
 // de rest hier nog aanvullen
 onSubmit(){
   // to do: ese EventEmitter with form value
  // console.warn(this.dataForm.value);
 }

}
