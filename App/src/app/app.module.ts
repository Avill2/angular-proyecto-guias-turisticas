import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecepcionHotelComponent } from './recepcion-hotel/recepcion-hotel.component';
import { RecepcionRestauranteComponent } from './recepcion-restaurante/recepcion-restaurante.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { InicioComponent } from './inicio/inicio.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import {Router, RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { CostaComponent } from './costa/costa.component';
import { SierraComponent } from './sierra/sierra.component';
import { OrienteComponent } from './oriente/oriente.component';
import { GalapagosComponent } from './galapagos/galapagos.component';

import {SpeechRecognitionService} from './speech-recognition.service';


@NgModule({
  declarations: [
    AppComponent,
    RecepcionHotelComponent,
    RecepcionRestauranteComponent,
    LoginComponent,
    RegistroComponent,
    ForgotpassComponent,
    InicioComponent,
    SeleccionComponent,
    CostaComponent,
    SierraComponent,
    OrienteComponent,
    GalapagosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,RouterModule.forRoot(routes,
      {
        useHash: false})
  ],
  providers: [
    SpeechRecognitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
