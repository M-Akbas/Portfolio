import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  isHovered = false; // Hier wird isHovered deklariert
  icons = [
    { number: 1 , isHovered: false},
    { number: 2 , isHovered: false},
  ]
  hover(itemNumber: number) {
    const hoveredItem = this.icons.find(item => item.number === itemNumber); // object 
    if (hoveredItem) {
      hoveredItem.isHovered = true;
    }

  }
  unhover(itemNumber: number) {
    const hoveredItem = this.icons.find(item => item.number === itemNumber);

    if (hoveredItem) {
      hoveredItem.isHovered = false;
    }

  }
}

