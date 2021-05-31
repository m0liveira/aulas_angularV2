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
  onOff: boolean = false;

  // play sound when lightsaber turns on
  switcher(): void {
    if (!this.onOff) {
      let audio = new Audio('https://assets.codepen.io/308367/coolsaber.mp3');
      audio.volume = 0.2;
      audio.play();
      this.onOff = true;
    } else {
      this.onOff = false;
    }
  }

  // defend animation
  defend(lightsaber: HTMLElement): void {
    lightsaber.classList.toggle("defend");
  }

  changeColor(): void {
    this.bg = this.bg == 'red' ? 'white' : 'red';
    this.bg = 'red';
    console.log("mudou");
  }

  hideToggle(box: HTMLElement, box2: HTMLElement): void {
    box.classList.toggle("hide");
    box2.classList.toggle("hide");
    console.log(this.sith);
  }

  republicJedi(box: HTMLElement, box2: HTMLElement): void {
    this.sith = false;
    this.hideToggle(box, box2);
  }

  sithJedi(box: HTMLElement, box2: HTMLElement): void {
    this.sith = true;
    this.hideToggle(box, box2);
  }
}
