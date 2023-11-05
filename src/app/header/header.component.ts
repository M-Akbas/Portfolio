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
    trigger("eat", [
      transition(":enter", [
        style({ opacity: 1}),
        animate('225ms', style({ opacity: 1 , transform: 'rotate(180deg)'}))
      ])
    ]),
    trigger("eat", [
      transition(":leave", [
        style({ opacity: 1 }),
        animate('225ms', style({ opacity: 1 }))
      ])
    ]),
    
  ]
})

export class HeaderComponent {
  closeIcon: boolean = true;
  menuIcon: boolean = true;
  constructor(private sharedService: SharedService) { }



  menu() {
    this.sharedService.sendClickEvent();
    this.toggleIcons()
  }

  toggleIcons() {
    this.closeIcon = !this.closeIcon;
    this.menuIcon = !this.menuIcon;
  }
}
