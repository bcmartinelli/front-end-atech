import { Component, OnInit } from '@angular/core';

import { RegisterTripService } from './register-trip.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-trip',
  templateUrl: './register-trip.component.html',
  styleUrls: ['./register-trip.component.sass']
})
export class RegisterTripComponent implements OnInit {

  // Inicializa variaveis do tipo array e number
  origins = [];
  destinys = [];
  transports = []
  members = [];
  idMembers = 1;

  // Cria mascara para os input Telefone
  public memberTel: string;
  public mask: Array<string | RegExp>;


  onSubmit(form) {
    console.log(form);
  }


  constructor(private RegisterTripService: RegisterTripService) {

    // Define mascara para o input Telefone
    this.mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/,  /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.memberTel = '';

    // Pega os registros de respectivas funções. < register-trip.service >
    this.origins = this.RegisterTripService.getTripOrigin();
    this.destinys = this.RegisterTripService.getTripDestiny();
    this.transports = this.RegisterTripService.getTripTransport();

    // Adiciona os primeiros inputs do primeiro integrante
    this.members.push({
      id: '{{' + this.idMembers + '}}',
      name: '',
      email: '',
      tel: ''
    });
  }

  // Valida input do formulário
  verifyValidTouched = (field) => {
    return !field.valid && field.touched;
  }

  // Aplica class 'has-error' no input invalido
  applyCssError = (field) => {
    return {
      'has-error': this.verifyValidTouched(field)
    }
  }

  // Adiciona campos para integrantes do form de Viagem
  addMember = () => {

    this.members.push({
      id: '{{' + this.idMembers++ + '}}',
      name: '',
      email: '',
      tel: ''
    });
  }

  // Remove campos adicionados para integrantes do form de Viagem
  removeMember = () => {
    if (this.members.length > 1) {
      this.idMembers--,
      this.members.splice(-1, 1);
    }
  }

  ngOnInit() {
  }

}
