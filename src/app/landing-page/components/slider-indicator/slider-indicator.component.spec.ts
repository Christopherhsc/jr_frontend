import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderIndicatorComponent } from './slider-indicator.component';

describe('SliderIndicatorComponent', () => {
  let component: SliderIndicatorComponent;
  let fixture: ComponentFixture<SliderIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderIndicatorComponent]
    });
    fixture = TestBed.createComponent(SliderIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
