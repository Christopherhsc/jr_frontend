import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';

// components
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SliderIndicatorComponent } from './components/slider-indicator/slider-indicator.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [LandingPageComponent, HomeComponent, AboutComponent, SliderIndicatorComponent, ServicesComponent],
  imports: [CommonModule, LandingPageRoutingModule],
})
export class LandingPageModule {}
