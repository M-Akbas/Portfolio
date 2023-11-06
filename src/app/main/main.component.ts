import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
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

  showAction(){
    let action = document.getElementById("showAction") as HTMLDivElement;
    action.style.opacity = "1";
    setInterval(() =>{
      action.style.opacity = "0";
    },2000)
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


