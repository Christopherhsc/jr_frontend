import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
},{
  path: 'om',
  component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
