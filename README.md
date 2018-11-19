<p align="center">
  <h2 align="center"> Angular Progress Bar</h2>
</p>
<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/angular-progress-bar"><img src="https://badge.fury.io/js/angular-progress-bar.svg?style=flat-square" alt="NPM version"></a>
</p> 

## Toc
- [Toc](#toc)
- [Introduction](#introduction)
- [Online demo](#online-demo)
- [Appearance](#appearance)
  - [Basic](#basic)
  - [Grey](#grey)
- [Installation](#installation)
- [How to use](#how-to-use)
  - [Classic way](#classic-way)
  - [Color degraded way](#color-degraded-way)

## Introduction ##

Angular progress bar is a component available from Angular 2, 4, 5, 6 and Ionic 2 and 3, and 4.

This component allow you to manage a progress visually

## Online demo ##

You can find a demo at https://angular-progress-bar-demo.stackblitz.io
## Appearance ##

### Basic ###
  <img src="./assets/angular-progress-bar.png?raw=true" alt="Appearence">

### Grey ###
  <img src="./assets/angular-progress-bar-50.PNG?raw=true" alt="Appearence">
  
## Installation ##

Type the following command to install the package:
    
```shell
npm install angular-progress-bar@latest --save
```
    
Then you need to import it into your app modules

```typescript
import {ProgressBarModule} from "angular-progress-bar"

@NgModule({
    imports: [
        ProgressBarModule
    ]
})
```
          

## How to use ##

### Classic way ###

By this way, progress property will be the value shown in the progress bar, and color property will be the color displayed
  
```html
<progress-bar [progress]="100" [color]="'#488aff'">
</progress-bar>
```

### Color degraded way ###

By this way, progress property will be the value shown in the progress bar, but color-degraded property must be bined ton an object.

This object, must containes a key value made be a string that represent a percent, and the value must be an hexadecimal color

in the example show below, from 0 to 15 percent the color will be #00cbcb then from 16 to 25 percent the color will be #f9c3d3 and then from 25 to the end the color will be #fd8c8e

```html
<progress-bar [progress]="100" [color-degraded]="{'0': '#00cbcb',  '15': '#f9c3d3', '25': '#fd8c8e'}">
</progress-bar>
  ```
