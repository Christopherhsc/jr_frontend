import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from '../../../shared/animations/animations'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideInAnimation],
})
export class AboutComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToAnotherComponent() {
    this.router.navigateByUrl('/other-component');
  }
}
