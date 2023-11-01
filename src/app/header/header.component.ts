import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private SharedService:SharedService) {

  }

  menu() {
    this.SharedService.sendClickEvent();
    
  }
}

