import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SliderIndicatorComponent } from './components/slider-indicator/slider-indicator.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SliderIndicatorComponent,
    ServicesComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class LandingPageModule {}
