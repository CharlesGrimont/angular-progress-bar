import { Component, Input  } from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector:
        'progress-bar',
    styles: [`
          .progress-outer {
            width: 96%;
            margin: 10px 2%;
            padding: 3px;
            text-align: center;
            background-color: #f4f4f4;
            border: 1px solid #dcdcdc;
            color: #fff;
            border-radius: 20px;
          }
          .progress-inner {
            min-width: 15%;
            white-space: nowrap;
            overflow: hidden;
            padding: 5px;
            border-radius: 20px;
          }
    `],
    template:
        "<div class=\"progress-outer\">\n" +
        "    <div class=\"progress-inner\" [style.width]=\"progress + '%'\" [style.background-color]=\"color != null ? color : '#488aff'\">\n" +
        "        {{progress}}%\n" +
        "</div>\n" +
        "</div>"


})
export class ProgressBarComponent {

  /** Inputs **/
    @Input('progress') progress: string;
    @Input('color') color: string;

  constructor() {

  }
}
