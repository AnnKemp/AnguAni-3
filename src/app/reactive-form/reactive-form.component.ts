import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms'; // voorlopig nog niet in gebruik

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
 
})
export class ReactiveFormComponent {
// by creating these controls in your component class, you get immediate access to listen for, update, and validate the state of the form input
username =  new FormControl('');
password = new FormControl('');

// je zou ook de 'valueChanges' observable kunnen gebruiken om de waarde weer te geven, je luistert voor veranderingen in de ingevulde waarden in het formulier en maakt hiervoor gebruik van de 'AsyncPipe' of in de component class gebruik je de subscribe() method
updatePassword() {
  this.password.setValue('Sesam open U!');
}
// maar hoe ik nu deze values moet doorgeven aan een server, waarschijnlijk met getValue maar dan . . . wegschrijven naar een API lijkt me al erg logisch, dat moet ik nog uitzoeken . . .
}
