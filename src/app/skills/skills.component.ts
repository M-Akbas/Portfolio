import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  icons = [
    { number: 1 , isHovered: false},
    { number: 2 , isHovered: false},
    { number: 3 , isHovered: false},
    { number: 4 , isHovered: false},
    { number: 5 , isHovered: false},
    { number: 6 , isHovered: false},
    { number: 7 , isHovered: false},
    { number: 8 , isHovered: false},
    { number: 9 , isHovered: false},
    { number: 10 , isHovered: false},
  ]
  
  isHovered = false;

  hover(itemNumber: number) {
    const hoveredItem = this.icons.find(item => item.number === itemNumber); // object 
    if (hoveredItem) {
      hoveredItem.isHovered = true;
      console.log(hoveredItem.isHovered)
    }

  }
  unhover(itemNumber: number) {
    const hoveredItem = this.icons.find(item => item.number === itemNumber);

    if (hoveredItem) {
      hoveredItem.isHovered = false;
      console.log(hoveredItem.isHovered)
    }

  }
}

