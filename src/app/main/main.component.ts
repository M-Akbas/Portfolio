import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HtmlParser } from '@angular/compiler';
import { animation, trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger("leftToRightSlow", [
      transition(":enter", [
        style({  transform: 'translateX(-500px)' }),
        animate("825ms ease-in-out", style({ opacity: 1 , transform: 'translateX(0px)'}))
      ])
    ]),
    trigger("leftToRightMedium", [
      transition(":enter", [
        style({  transform: 'translateX(-500px)' }),
        animate("525ms ease-in-out", style({ opacity: 1 , transform: 'translateX(0px)'}))
      ])
    ]),
    trigger("leftToRightFast", [
      transition(":enter", [
        style({ transform: 'translateX(-500px)' }),
        animate("325ms ease-in-out", style({ opacity: 1 , transform: 'translateX(0px)'}))
      ])
    ]),
    trigger("downToUp", [
      transition(":enter", [
        style({  transform: 'translateY(200px)' , overflowY: 'hidden'}),
        animate("825ms ease-in-out", style({ opacity: 1 , transform: 'translateY(0px)'}))
      ])
    ]),

  ]
})
export class MainComponent implements OnInit {
  menu: boolean = false;
  clickEventSubscription: Subscription;


  constructor(private sharedService: SharedService, private router: Router) {
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.showMenu();

    });
  }

  ngOnInit(): void {

  }

  showAction() {
    let action = document.getElementById("showAction") as HTMLDivElement;
    let email = document.getElementById("email") as HTMLDivElement;
    let emailVal = email.innerText;

    action.style.opacity = "1";
    this.copyMail(emailVal);

    setInterval(() => {
      action.style.opacity = "0";
    }, 2000)
  }

  copyMail(value: string) {
    navigator.clipboard.writeText(value);
  }

  toggle() {
    this.menu = !this.menu;
  }


  closeMenu() {
    let main = document.getElementById('main') as HTMLDivElement;
    let menu = document.getElementById('menu') as HTMLDivElement;
    menu.style.display = "none"
    main.style.display = "block";
    this.toggle();
  }



  showMenu() {
    if (this.menu) {
      let main = document.getElementById('main') as HTMLDivElement;
      let menu = document.getElementById('menu') as HTMLDivElement;
      menu.style.display = "none"
      main.style.display = "block";

      this.toggle();
    } else {
      let main = document.getElementById('main') as HTMLDivElement;
      let menu = document.getElementById('menu') as HTMLDivElement;
      menu.style.display = "block"
      main.style.display = "none";

      this.toggle();
    }

  }






}


