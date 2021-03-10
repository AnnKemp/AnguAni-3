import { Component, OnInit} from '@angular/core';

// om de jQuery te laten werken anders geeft Angular foutmeldingen op het '$'-teken
declare var $: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit{
// Om jQuery te installeren type je: 'npm install jquery' (in de terminal)

ngOnInit(){ // jQuery kan niet werken zonder de ngOnInit() is i.p.v. $(document).ready in jQuery
  // hier schrijf je de jQuery in de OnInit()

  $('#flip').click(function(){
    $("#panel").slideToggle("slow");
   }); 
  

// je moet wel hier bovenaan de $ als variabele declareren anders krijg je foutmeldingen hierop

}
  }

