import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'ngx-color-spinner',
  template: `<mat-spinner [color]="_color"></mat-spinner>`,
  styles: []
})
export class NgxColorSpinnerComponent implements OnInit, OnDestroy {

  intervalSubscription: Subscription;
  _color: String;
  colors: String[] = ['primary', 'accent', 'warn'];

  constructor() { }

  ngOnInit() {
    this._color = this.colors[0];
    const source = interval(1000);
    let index = 0;
    const totalLength = this.colors.length;
    this.intervalSubscription = source.subscribe(val => {
      if (index == totalLength) {
        index = 0;
      }
      this._color = this.colors[index];
      index++;
    });
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
