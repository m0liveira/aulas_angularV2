import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css'],
})
export class EvAndRefComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  bg: string;
  sith: boolean;

  changeColor(): void {
    this.bg = this.bg == 'red' ? 'white' : 'red';
    this.bg = 'red';
    console.log("mudou");
  }

  hideChooser(box: HTMLElement): void {
    box.style.display = "none";
    console.log(this.sith);
  }

  republicJedi(box: HTMLElement): void {
    this.sith = false;
    this.hideChooser(box);
  }

  sithJedi(box: HTMLElement): void {
    this.sith = true;
    this.hideChooser(box);
  }
}
