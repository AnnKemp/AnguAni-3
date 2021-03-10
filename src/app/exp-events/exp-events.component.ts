import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms'; // voorlopig nog niet in gebruik

@Component({
  selector: 'app-exp-events',
  templateUrl: './exp-events.component.html',
  styleUrls: ['./exp-events.component.css']
})
export class ExpEventsComponent {
// by creating these controls in your component class, you get immediate access to listen for, update, and validate the state of the form input
username =  new FormControl('');
password = new FormControl('');

// this property is for the onKeyUp event
values=''; // to catch the username
valueees=''; // to catch the test-value

// 1 ***** the first method works fine ***
//onKey(event:any){ // without type info, you catch the event
//this.values=event.target.value;
//}

// 2 **** but it's better to use this: ****
onKey(event: KeyboardEvent){ // with type info
  this.values +=(event.target as HTMLInputElement).value + ' | ';
} // nu werkt de functie updatePassword niet meer sinds ik met die events begonnen ben ... mm

// 3 **** this is a much better way to do this **** (whithout the $event, because it gives conflicts)
// onkeyup from the test-value-field
onKeyUp(value: string){
  this.valueees += value + '|';
}

// je zou ook de 'valueChanges' observable kunnen gebruiken om de waarde weer te geven, je luistert voor veranderingen in de ingevulde waarden in het formulier en maakt hiervoor gebruik van de 'AsyncPipe' of in de component class gebruik je de subscribe() method
updatePassword() {
  this.password.setValue('Sesam open U!');
}
// maar hoe ik nu deze values moet doorgeven aan een server, waarschijnlijk met getValue maar dan . . . wegschrijven naar een API lijkt me al erg logisch, dat moet ik nog uitzoeken . . .
}

 