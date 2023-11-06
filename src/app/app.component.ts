import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio-Akademie';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const headerElement = this.el.nativeElement.querySelector('#app-header');

    if (scrollY > 0) {
      this.renderer.setStyle(headerElement, 'box-shadow', '0 2px 4px rgba(0, 0, 0, 0.1)');
    } else {
      this.renderer.removeStyle(headerElement, 'box-shadow');
    }
  }
}
