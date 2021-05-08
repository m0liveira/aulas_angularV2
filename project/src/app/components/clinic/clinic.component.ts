import { Component, OnInit } from '@angular/core';
import { PhoneBooking } from 'src/app/services/phone-booking';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  appointments: Array<PhoneBooking> = [
    new PhoneBooking("https://source.unsplash.com/400x400/?man", "John Doe", 27, "George Moralez", "Psychologist", "27/09/2022"),
    new PhoneBooking("https://source.unsplash.com/1600x800/?asian-weman", "Ayumi Yamashita", 45, "Mike Mendez", "Surgeon", "11/03/2021"),
    new PhoneBooking("https://source.unsplash.com/600x800/?little-boy", "Raul Menendez", 10, "Miroslav Patchenko", "Pediatrician", "05/012/2023"),
    new PhoneBooking("https://source.unsplash.com/1200x800/?woman", "Alicia Ramirez", 32, "Sara Baker", "Urologist", "30/06/2021"),
    new PhoneBooking("https://source.unsplash.com/800x400/?man-photo", "Alex Mason", 22, "Gina Kruller", "Ophthalmologist", "31/05/2022"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
