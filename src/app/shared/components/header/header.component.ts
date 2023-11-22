import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSmallScreen = false;
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  constructor() {
    this.isSmallScreen = window.innerWidth <= 700;
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth <= 700;
    });
  }
}