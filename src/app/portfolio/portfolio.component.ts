import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],

})
export class PortfolioComponent implements OnInit {
  showContent: boolean[] = [false, false, false, false];
  mobile: boolean = false;


  ngOnInit() {
    this.mobileView();
  }

  mobileView() {
    let img = document.getElementsByClassName[0](".img") as HTMLImageElement;
    
    if (window.innerWidth < 600) {
      this.mobile = true;
      img.style.filter = "grayscale(0%)"
      for (let i = 0; i < this.showContent.length; i++) {
        this.showContent[i] = true;
      }

    } else {
      this.mobile = true;

    }
  }

  show(index: number) {
    if (!this.mobile) {
      // do nothing
    } else {
      this.showContent[index] = true;

    }
  }

  hide(index: number) {
    if (!this.mobile) {
      // do nothing
    } else {
      if (window.innerWidth > 500) {
        this.showContent[index] = false;
      }

    }
  }
}


