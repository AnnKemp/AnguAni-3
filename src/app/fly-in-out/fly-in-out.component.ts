import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-fly-in-out',
  templateUrl: './fly-in-out.component.html',
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

  

}
