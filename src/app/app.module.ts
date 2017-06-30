

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RegistredTripModule } from './registred-trip/registred-trip.module';
import { LogoComponent } from './logo/logo.component';
import { RegisterTripModule } from './register-trip/register-trip.module';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    RegistredTripModule,
    RegisterTripModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
