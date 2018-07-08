import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
@NgModule({
    declarations: [ProgressBarComponent],
    exports: [ProgressBarComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProgressBarModule {}

