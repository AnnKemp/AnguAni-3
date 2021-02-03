import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity:1,
        backgroundColor: 'red'
      })),
      state('closed', style({
        height: '100px',
        opacity:0.5,
        backgroundColor: 'yellow'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class RedComponent{
isOpen=true;

toggle(){
  this.isOpen=!this.isOpen;
}

}
