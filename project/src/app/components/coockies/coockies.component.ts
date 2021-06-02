import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coockies',
  templateUrl: './coockies.component.html',
  styleUrls: ['./coockies.component.css'],
})
export class CoockiesComponent implements OnInit {
  constructor() {}

  // verifica no reload
  ngOnInit(): void {
    this.getCookies();
  }

  cookies: boolean;

  // save cookies
  saveOnCookies(): any {
    // localStorage.setItem('cookies', 'accepted');

    // this.cookies = true;
  }

  // get cookies
  getCookies(): any {
    // this.cookies = localStorage.getItem('cookies') == 'accepted' ? true : false;
  }
}
