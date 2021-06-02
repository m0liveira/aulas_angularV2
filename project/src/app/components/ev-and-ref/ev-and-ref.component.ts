import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css'],
})
export class EvAndRefComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  bs: string;
  sith: boolean;
  onOff: boolean = false;

  //#region sound area
  // play sound when lightsaber turns on
  switcher(): void {
    let audio3;
    if (!this.onOff) {
      let audio = new Audio('https://assets.codepen.io/308367/coolsaber.mp3');
      audio.volume = 0.2;
      audio.play();

      this.onOff = true;
    } else {
      this.onOff = false;
      let audio2 = new Audio('../../assets/audio/Close.mp4');
      audio2.volume = 0.2;
      audio2.play();
    }
  }
  //#endregion

  //#region lightsaber animations
  // defend animation
  defend(
    lightsaber: HTMLElement,
    blade: HTMLElement,
    checkbox: HTMLInputElement
  ): void {
    if (!this.onOff) {
      checkbox.checked = true;
      this.switcher();
      this.onOff = true;

      lightsaber.classList.toggle('defend');
    } else {
      lightsaber.classList.toggle('defend');
    }
  }

  tuneMe(blade: HTMLElement, checkbox: HTMLInputElement) {
    if (!this.onOff) {
      checkbox.checked = true;
      this.switcher();
      this.onOff = true;

      blade.classList.toggle('tuneIt');
    } else if (this.onOff) {
      checkbox.checked = false;
      this.switcher();
      blade.classList.toggle('tuneIt');
      setTimeout(() => {
        checkbox.checked = true;
        this.switcher();
      }, 750);
    }
  }

  //#endregion

  changeColor(inputColor: HTMLInputElement, blade: HTMLElement): void {
    this.bs = inputColor.value;
    blade.style.boxShadow =
      'inset 0 0 0.25rem hsl(' +
      this.bs +
      '), 0 0 1rem hsla(' +
      this.bs +
      ', 0.8), 0 0 1.5rem hsla(' +
      this.bs +
      ', 0.7),  0 0 2rem hsla(' +
      this.bs +
      ', 0.5), 0 0 3rem hsla(' +
      this.bs +
      ', 0.3),  0 0 5rem hsla(' +
      this.bs +
      '%, 0.2); ';

      console.log(this.bs);
  }

  hideToggle(box: HTMLElement, box2: HTMLElement): void {
    box.classList.toggle('hide');
    box2.classList.toggle('hide');
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
