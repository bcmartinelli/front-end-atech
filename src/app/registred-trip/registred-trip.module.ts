
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistredTripComponent } from './registred-trip.component';
import { RegistredTripService } from './registred-trip.service';
import { routing } from './../app.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    RegistredTripComponent
  ],
  exports: [
    RegistredTripComponent
  ],
  providers: [
    RegistredTripService
  ]
})
export class RegistredTripModule { }
