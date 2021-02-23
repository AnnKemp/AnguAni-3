import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-object',
  templateUrl: './template-object.component.html',
  styleUrls: ['./template-object.component.css']
})
export class TemplateObjectComponent {

//------------------------------- oefening 1: Pass value to an event handler -------------------------------//
public telefoonnummer;

  callPhone(value: number){
   return this.telefoonnummer=value; 
    //console.log(this.telefoonnummer);  // voordat ik return gebruikte om te testen
  }
//----------------------------------- einde oefening 1 -------------------------//
  constructor() { }

  

}
