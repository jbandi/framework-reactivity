import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      {{count}}
    </div>
    <div>
      <button (click)="increase()">+</button>
      <button (click)="decrease()">-</button>
    </div>
    <div>
      <button (click)="toggle()">Toggle</button>
    </div>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = 0;
  private intervalHandle;

  constructor() {}

  ngOnInit(): void {
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  toggle() {
    if (!this.intervalHandle) {
      this.intervalHandle = setInterval(() => {
        this.count++;
      }, 1000);
    } else {
      clearInterval(this.intervalHandle);
      this.intervalHandle = undefined;
    }
  }
}
