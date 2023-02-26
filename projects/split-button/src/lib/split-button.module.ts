import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';

import { MasSplitButton } from './split-button.component';

@NgModule({
  declarations: [
    MasSplitButton
  ],
  imports: [
    BrowserModule,
    // MatButtonModule,
    MatMenuModule,
    MatRippleModule
  ],
  exports: [
    MasSplitButton
  ]
})
export class MasSplitButtonModule { }
