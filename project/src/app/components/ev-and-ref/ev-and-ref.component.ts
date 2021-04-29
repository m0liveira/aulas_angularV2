import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css'],
})
export class EvAndRefComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  bg: string;

  changeColor(): void {
    this.bg = this.bg == 'red' ? 'white' : 'red';
  }
}
