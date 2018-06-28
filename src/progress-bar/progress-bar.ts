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
        "    <div class=\"progress-inner\" [style.width]=\"progress + '%'\" [style.background-color]=\"degraded == null ? color : whichColor(progress)\">\n" +
        "        {{progress}}%\n" +
        "</div>\n" +
        "</div>"


})
export class ProgressBarComponent {

  /** Inputs **/
    @Input('progress') progress: string;
    @Input('color') color: string;
    @Input('color-degraded') degraded: any;


  constructor() {
    // Default color
    this.color = "#488aff";
  }

  /**
   * Returns a color for a certains percent
   * @param percent The current progress
   */
  whichColor(percent: string){
    // Get all entries index as an array
    let k: Array<any> = Object.keys(this.degraded);
    // Convert string to number
    k.forEach((e, i) => k[i] = +e);
    // Sort them by value
    k = k.sort((a, b) => a - b);
    // Percent as number
    let p = +percent
    // Set last by default as the first occurence
    let last = k[0];
    // Foreach keys 
    for(let val of k){
      // if current val is < than percent
      if(val < p){
        last = val;
      }
      // if val >= percent then the val that we could show has been reached
      else if(val >= p -1){
        return this.degraded[last];
      }
    }
    // if its the last one retrun the last
    return this.degraded[last];
  }
}
