import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
