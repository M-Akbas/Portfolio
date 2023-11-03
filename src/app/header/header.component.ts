import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 1 , transform: 'translateX(-200%)'}),
        animate('425ms', style({ opacity: 1 ,transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0%)'}),
        animate('425ms', style({ opacity: 1 , transform: 'translateX(-200%)'}))
      ]),
    ]),
    trigger('eatYourself', [
      
      transition(':leave', [
        style({ opacity: 0, transform: 'scale(1)',  }), // Startzustand
        animate('225ms', style({ opacity: 1, transform: 'scale(0.2)' , rotate: '180deg'})) // Endzustand
      ]),
    ]),
    trigger('showYourself', [
      
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.2)' }), // Startzustand
        animate('225ms', style({ opacity: 1, transform: 'scale(1)' })) // Endzustand
      ]),
    ]),
    trigger('up', [
      
      transition(':enter', [
        style({ opacity: 1, transform: 'translateY(200%)',  }), // Startzustand
        animate('225ms', style({ opacity: 1  , transform: 'translateY(0%)'})) // Endzustand
      ]),
    ]),
  ]
})

export class HeaderComponent {
  public event: boolean;
  visible:boolean = true;

  menuStyleFlex = false;
  constructor(private SharedService: SharedService) {
    this.event = false;

  }

  menu() {
    let menu = document.getElementById("menu") as HTMLDivElement;
    console.log(this.event);
    this.SharedService.sendClickEvent();
    if (!this.menuStyleFlex) {
      menu.style.display = "flex";
      this.menuStyleFlex = true;
      this.visible = false;

    } else {
      menu.style.display = "none"
      this.menuStyleFlex = false;
      this.visible = true;
    }
  }
}
