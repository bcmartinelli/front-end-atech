import { Injectable } from '@angular/core';

@Injectable()
export class RegisterTripService {

  constructor() { }

  // Retorna Origens cadastradas
  getTripOrigin() {
    return [
      {
        'id' : '1',
        'name' : 'Jacareí'
      },
      {
        'id' : '2',
        'name' : 'Campinas'
      },
      {
        'id' : '3',
        'name' : 'São José dos Campos'
      },
      {
        'id' : '4',
        'name' : 'São Paulo'
      },
      {
        'id' : '5',
        'name' : 'Taubaté'
      }
    ];
  }

  // Retorna Destinos cadastrados
  getTripDestiny() {
    return [
      {
        'id' : '1',
        'name' : 'Jacareí'
      },
      {
        'id' : '2',
        'name' : 'Campinas'
      },
      {
        'id' : '3',
        'name' : 'São José dos Campos'
      },
      {
        'id' : '4',
        'name' : 'São Paulo'
      },
      {
        'id' : '5',
        'name' : 'Taubaté'
      }
    ];
  }

  // Retorna meios de transportes cadastrados
  getTripTransport() {
    return [
      {
        'id' : '1',
        'name' : 'Avião'
      },
      {
        'id' : '2',
        'name' : 'Carro Particular'
      },
      {
        'id' : '3',
        'name' : 'Taxi'
      },
      {
        'id' : '4',
        'name' : 'Uber'
      },
      {
        'id' : '5',
        'name' : 'Navio'
      },
      {
        'id' : '6',
        'name' : 'Ônibus'
      },
      {
        'id' : '7',
        'name' : 'Trêm'
      }
    ];
  }
}
