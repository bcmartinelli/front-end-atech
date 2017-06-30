import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {

  // Adiciona a URL da imagem na variavel urlLogo
  urlLogo = 'http://www.atech.com.br/mestri/bancoarquivos/imagens/logo-atech.gif';

  constructor() { }

  ngOnInit() {
  }

}
