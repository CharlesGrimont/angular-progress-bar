import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './angular-progress-bar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
  ],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProgressBarModule { }
