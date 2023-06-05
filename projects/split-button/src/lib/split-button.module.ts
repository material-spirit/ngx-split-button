import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';

import { MasSplitButton } from './split-button.component';

@NgModule({
  declarations: [
    MasSplitButton
  ],
  imports: [
    CommonModule,
    // MatButtonModule,
    MatMenuModule,
    MatRippleModule
  ],
  exports: [
    MasSplitButton
  ]
})
export class MasSplitButtonModule { }
