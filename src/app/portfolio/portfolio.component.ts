import { Component, OnInit, AfterViewInit } from '@angular/core';
import { style } from '@angular/animations';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],

})
export class PortfolioComponent implements AfterViewInit {
  showContent: boolean[] = [false, false, false, false];
  mobile: boolean = false;


  ngAfterViewInit() {
    setInterval(() => {
      this.mobileView();
      
    }, 1000)
  }

  mobileView() {
    if (window.innerWidth < 600) {
      this.mobile = true;
      let imgs = document.getElementsByClassName("img") as HTMLCollection;
      for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i] as HTMLImageElement;
        img.style.filter = "grayscale(0%)"; // Hier wird 'img' statt 'imgs' verwendet
      }
      for (let i = 0; i < this.showContent.length; i++) {
        this.showContent[i] = true;
        console.log(this.showContent);
      }
    } else {
      this.mobile = true; // Änderung hier
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


