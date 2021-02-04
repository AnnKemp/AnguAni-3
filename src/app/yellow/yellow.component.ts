import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-yellow',
  animations: [
    trigger('openYellow', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.css']
})

export class YellowComponent{
  isOpen=true;

  toggle(){
    this.isOpen=!this.isOpen;
  }
  
  }

 
