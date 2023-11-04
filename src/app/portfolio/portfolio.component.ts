import { Component, OnInit } from '@angular/core';


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
    if (window.innerWidth < 500) {
      this.mobile = true;
      for (let i = 0; i < this.showContent.length +1; i++) {
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
      if(window.innerWidth > 500){
        this.showContent[index] = false;
      }
      
    }
  }
}


