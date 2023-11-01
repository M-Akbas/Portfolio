import { Component, AfterViewInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit{
  isVisible: boolean = true;
  clickEventSubscription: Subscription;

  constructor(private SharedService:SharedService) {
    this.clickEventSubscription = this.SharedService.getEvent().subscribe(() =>{
      this.mainPageToggle();
    });
  }


  ngAfterViewInit(){
    
  }


  mainPageToggle() {
    const mainPage = document.querySelector(".main") as HTMLElement;
    
    if (this.isVisible) {
      mainPage.style.display = "none";
      this.isVisible = false;
    } else {
      mainPage.style.display = "block";
      this.isVisible = true;
    }
    
  }
}

