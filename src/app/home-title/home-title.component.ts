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
  selector: 'app-home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.scss'],
  animations: [
    trigger('down', [
      transition(':enter', [
        style({ opacity: 1, transform: 'translateY(-50%)' }), animate('525ms ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' })) // Endzustand
      ])
    ]),
    trigger('up', [
      transition(':enter', [
        style({ opacity: 1, transform: 'translateY(50%)' }), animate('525ms ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' })) // Endzustand
      ])
    ]),
    trigger('right', [
      transition(':enter', [
        style({ opacity: 1, transform: 'translateX(-50%)' }), animate('525ms ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' })) // Endzustand
      ])
    ]),
  ]
})
export class HomeTitleComponent {

}
