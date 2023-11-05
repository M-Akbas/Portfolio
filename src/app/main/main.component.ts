import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  menu: boolean = false;
  clickEventSubscription: Subscription;


  constructor(private sharedService: SharedService) {
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.showMenu();
      
    });
  }

  ngOnInit(): void {

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

  toggle() {
    this.menu = !this.menu;
  }




}


