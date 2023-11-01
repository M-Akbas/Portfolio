import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit{
  isVisible: boolean = true;

  constructor() {
    
  }
  ngAfterViewInit(){
    this.mainPageToggle();
  }
  mainPageToggle() {
    const mainPage = document.querySelector(".main") as HTMLElement;

    if (!this.isVisible) {
      mainPage.style.display = "none";
    } else {
      mainPage.style.display = "block";
    }
  }
}

