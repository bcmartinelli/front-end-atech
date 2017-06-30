import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistredTripComponent } from './registred-trip/registred-trip.component';
import { RegisterTripComponent } from './register-trip/register-trip.component';

const APP_ROUTES: Routes = [
    { path: '', component: RegistredTripComponent },
    { path: 'registred-trip', component: RegistredTripComponent },
    { path: 'register-trip', component: RegisterTripComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
