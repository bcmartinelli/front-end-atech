import { Component, OnInit } from '@angular/core';

import { RegistredTripService } from './registred-trip.service';

@Component({
  selector: 'app-registred-trip',
  templateUrl: './registred-trip.component.html',
  styleUrls: ['./registred-trip.component.sass']
})
export class RegistredTripComponent implements OnInit {

  trips = [];

  constructor(private RegistredTripService: RegistredTripService) {

    // Pega os registros de respectivas funções. < registred-trip.service >
    this.trips = this.RegistredTripService.getTrips();

  }

  ngOnInit() {
  }

}
