import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-screen',
  template: `
    <h1>{{title}}</h1>
    <app-counter></app-counter>
  `,
  styleUrls: ['./counter-screen.component.css']
})
export class CounterScreenComponent implements OnInit {

  title = 'Counter Screen';

  constructor() { }

  ngOnInit(): void {
  }

}
