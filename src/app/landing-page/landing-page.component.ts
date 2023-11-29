import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  isHomeVisible = true;

  routeToAbout(): void {
    this.isHomeVisible = false;
    const slider = document.querySelector('.slider-container') as HTMLElement;
    if (slider) {
        slider.style.transform = 'translateX(-50%)'; // Moves the slider to show the about component
    }
}

routeToHome(): void {
  this.isHomeVisible = true;}
}
