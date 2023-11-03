import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
} from "@angular/animations";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('right', [
      transition(':enter', [
        style({ opacity: 1, transform: 'translateX(-50%)' }), animate('825ms ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' })) // Endzustand
      ])
    ]),
    
    
  ]
})
export class AboutMeComponent {

}
