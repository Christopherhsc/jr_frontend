import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSmallScreen = false;
  isDropdownOpen = false;

  constructor(private dialog: MatDialog) {
    this.isSmallScreen = window.innerWidth <= 1050;
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth <= 1050;
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
    });
  }
}