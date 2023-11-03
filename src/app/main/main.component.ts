import { Component, AfterViewInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  isVisible: boolean = true;
  clickEventSubscription: Subscription;
  mainPage: HTMLElement; // Deklaration des HTML Element

  constructor(private sharedService: SharedService) {
    this.clickEventSubscription = this.sharedService.getEvent().subscribe(() => {
      this.mainPageToggle();
    });
  }

  ngAfterViewInit() {
    // auf die klasse von HTML zugreifen
    this.mainPage = document.querySelector(".main") as HTMLElement;
  }

  mainPageToggle() {
    if (this.isVisible) {
      this.mainPage.style.display = "none";
      this.isVisible = false;
    } else {
      this.mainPage.style.display = "block";
      this.isVisible = true;
    }
  }
}


