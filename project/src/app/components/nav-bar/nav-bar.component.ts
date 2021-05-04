import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  menuOpen: boolean = false;

  closeMenu(burguer: HTMLElement, overlay: HTMLElement, refUl: HTMLElement): void {
    if (!this.menuOpen) {
      this.menuOpen = true;
      burguer.classList.toggle('open');
      this.openMenu(burguer, overlay, refUl);
    } else {
      this.openMenu(burguer, overlay, refUl);
    }
  }

  // when burguer pressed
  openMenu(burguer: HTMLElement, overlay: HTMLElement, refUl: HTMLElement): void {
    if (!this.menuOpen) {
      burguer.classList.toggle('open');
      overlay.style.transform = 'translateX(0)';
      overlay.style.background = '#000014d9';
      refUl.style.transform = 'translateX(0)';
      this.menuOpen = true;
    } else {
      burguer.classList.toggle('open');
      overlay.style.background = 'transparent';
      refUl.style.transform = 'translateX(-110%)';
      this.menuOpen = false;

      setTimeout(() => {
        overlay.style.transform = 'translateX(-100%)';
      }, 500);
    }
  }

  // when link pressed
  navChoice(burguer: HTMLElement, overlay: HTMLElement, refUl: HTMLElement): void {
    this.openMenu(burguer, overlay, refUl);
  }
}
