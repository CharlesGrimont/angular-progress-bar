import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarComponent } from './angular-progress-bar.component';

describe('AngularProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarComponent ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    component.progress = "0";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default color', () => {
    expect(component.color).toBe("#488aff");
  });

  it('should have a progress', () => {
    expect(component.progress).toBe("0");
  });

  it('should have a degraded color', () => {
    component.degraded = {'0': '#00cbcb',  '15': '#f9c3d3', '25': '#fd8c8e'};
    fixture.detectChanges();
    for(var val = 0; val <16; val++){
      expect(component.whichColor(val +"")).toBe('#00cbcb');
    }
    for(var val = 16; val <26; val++){
      expect(component.whichColor(val +"")).toBe('#f9c3d3');
    }
    for(var val = 26; val <101; val++){
      expect(component.whichColor(val +"")).toBe('#fd8c8e');
    }
  });
});
