import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1000ms ease-in-out')
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class LoginComponent {
  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  onSubmit(): void {
    // Handle login form submission logic
  }

  onRegister(): void {
    // Handle register button action
  }

  close(): void {
    this.dialogRef.close();
  }
}
