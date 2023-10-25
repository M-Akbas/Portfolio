import { Component } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  
})
export class PortfolioComponent {
  showContent: boolean[] = [false, false, false, false];

  show(index: number) {
    this.showContent[index] = true;
  }

  hide(index: number) {
    this.showContent[index] = false;
  }
}


