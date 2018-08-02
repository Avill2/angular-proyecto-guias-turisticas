import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SeleccionComponent} from './seleccion.component';
import {FormsModule} from "@angular/forms";

import { InicioComponent } from '../inicio/inicio.component';

@NgModule({
  declarations: [ // Componentes
    SeleccionComponent,
    InicioComponent
  ],
  imports: [ // Modulos
    BrowserModule, // ngIf ngFor
    FormsModule // NgModel
  ],
  providers: [ // Servicios

  ],
  bootstrap: [ // El componente principal
    SeleccionComponent
  ]
})
export class SeleccionModule {
}
