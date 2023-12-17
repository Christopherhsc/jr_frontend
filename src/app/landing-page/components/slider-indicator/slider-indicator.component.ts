import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-indicator',
  templateUrl: './slider-indicator.component.html',
  styleUrls: ['./slider-indicator.component.scss'],
})
export class SliderIndicatorComponent {
  @Input() text: string;
  @Input() activeIndex: number;
  routes: string[] = ['/', '/om', '/ydelser', '/kontakt', '/other'];
  @Input() activeColor: string = 'var(--primary)'; 
  @Input() inactiveColor: string = 'var(--detail)'; 
  @Input() textColor: string = 'var(--primary)'; 
  indicators = new Array(4);
  

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let newIndex: number | null = null;

    if (event.key === 'ArrowRight' || event.key === 'd') {
      newIndex = (this.activeIndex + 1) % this.routes.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'a') {
      newIndex =
        (this.activeIndex - 1 + this.routes.length) % this.routes.length;
    }

    if (newIndex !== null) {
      this.activeIndex = newIndex;
      this.navigateTo(this.routes[this.activeIndex]);
    }
  }
}
