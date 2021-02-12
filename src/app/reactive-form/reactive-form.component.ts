import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
 
})
export class ReactiveFormComponent {

username =  new FormControl('');
password = new FormControl('');

updatePassword() {
  this.password.setValue('Sesam open U!');
}
// maar hoe ik nu deze values moet doorgeven aan een server, waarschijnlijk met getValue maar dan . . . wegschrijven naar een API lijkt me al erg logisch, dat moet ik nog uitzoeken . . .
}
