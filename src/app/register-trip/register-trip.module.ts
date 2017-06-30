
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RegisterTripComponent } from './register-trip.component';
import { RegisterTripService } from './register-trip.service';
import { TextMaskModule } from 'angular2-text-mask';
import { routing } from './../app.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
    routing
  ],
  declarations: [
    RegisterTripComponent,
  ],
  exports: [
    RegisterTripComponent
  ],
  providers: [
    RegisterTripService
  ]
})
export class RegisterTripModule { }
