import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-fly-in-out',
  template: `<div [@flyInOut]="'in'" (click)="out()">Fly-in by page change and out on click (or on page change I still have to find/try out)</div>`,
  styleUrls: ['./fly-in-out.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)'})),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        style({ transform: 'translateX(100%)' }),
        animate(100)
    ]),
   ])
  ]
})
export class FlyInOutComponent {

  out(){
    // still have to write the 'out' function to make the div fly out of the page
  }

}
