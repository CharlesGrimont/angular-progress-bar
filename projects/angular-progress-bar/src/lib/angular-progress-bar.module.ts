import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './angular-progress-bar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgressBarModule { }