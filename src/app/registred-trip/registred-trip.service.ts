import { Injectable } from '@angular/core';

@Injectable()
export class RegistredTripService {

  constructor() { }

  // Retorna viagens cadastradas
  getTrips() {
    return [
      {
        'id' : '1',
        'dateTrip' : '07/05/2017 05:50',
        'origin' : 'São José dos Campos',
        'destiny' : 'São Paulo',
        'vehicle' : 'Carro',
        'members' : '4'
      },
      {
        'id' : '2',
        'dateTrip' : '25/05/2017 08:30',
        'origin' : 'São José dos Campos',
        'destiny' : 'São Paulo',
        'vehicle' : 'Onibus',
        'members' : '6'
      },
      {
        'id' : '3',
        'dateTrip' : '13/06/2017 14:20',
        'origin' : 'São José dos Campos',
        'destiny' : 'São Paulo',
        'vehicle' : 'Avião',
        'members' : '3'
      },
      {
        'id' : '4',
        'dateTrip' : '15/06/2017 17:00',
        'origin' : 'São José dos Campos',
        'destiny' : 'São Paulo',
        'vehicle' : 'Carro',
        'members' : '2'
      }
    ];
  }

}
