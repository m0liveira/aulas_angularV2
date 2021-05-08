import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PhoneBooking {
  photo: string;
  name: string;
  age: number;
  doctor: string;
  specialty: string;
  date: Date | string;

  constructor(photo: string, name: string, age: number, doctor: string, specialty: string, date: Date | string) {
    this.photo = photo;
    this.name = name;
    this.age = age;
    this.doctor = doctor;
    this.specialty = specialty;
    this.date = date;
  }
}
