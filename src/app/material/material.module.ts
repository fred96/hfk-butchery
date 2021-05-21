import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    materialModules
  ],
  exports: [
    materialModules
  ],
})

export class MaterialModule { }
