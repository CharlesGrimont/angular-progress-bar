# Angular / Ionic Progress bar component #

## Installation ##

Type the following command to install the package:
    
    npm install angular-progress-bar@latest --save
    
Then you need to import it into your app modules

    import {ProgressBarModule} from "angular-progress-bar"
    
    @NgModule({
      imports: [
          ProgressBarModule
      ]
    })
          

## How to use ##
    <progress-bar [progress]="100" [color]="#488aff">
    </progress-bar>


![alt text](https://github.com/CharlesGrimont/angular-progress-bar/blob/master/assets/angular-progress-bar.png?raw=true)
