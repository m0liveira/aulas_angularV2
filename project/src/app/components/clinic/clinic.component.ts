import { Component, OnInit } from '@angular/core';
import { PhoneBooking } from 'src/app/services/phone-booking';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

    phoneService : PhoneBooking;

    constructor( pService : PhoneBooking) {
      this.phoneService = pService;
    }

    ngOnInit(): void {
    }

}
