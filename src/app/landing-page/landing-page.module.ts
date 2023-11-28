import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';

// components
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [LandingPageComponent, HomeComponent, AboutComponent],
  imports: [CommonModule, LandingPageRoutingModule],
})
export class LandingPageModule {}
