import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() arrowClicked = new EventEmitter<void>();
  @Input() isHomeVisible: boolean;
  
  onArrowClick(): void {
      this.arrowClicked.emit();
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
