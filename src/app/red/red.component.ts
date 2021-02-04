import { Component } from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-red',
animations: [
    trigger('openRed', [
      state('open', style({
        height: '1000px',
        width:'100%',
        opacity: 1,
        backgroundColor: 'red'
      })),
      state('closed', style({
        height: '200px',
        width:'200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent{
isOpen = true;

toggle(){
  this.isOpen=!this.isOpen;
}

}
