import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SeleccionComponent} from './seleccion.component';
import {FormsModule} from "@angular/forms";

import { InicioComponent } from '../inicio/inicio.component';
import {BarraSuperiorComponent} from '../barra-superior/barra-superior.component';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [ // Componentes
    SeleccionComponent,
    InicioComponent,
    BarraSuperiorComponent
  ],
  imports: [ // Modulos
    BrowserModule, // ngIf ngFor
    FormsModule, // NgModel
    MatToolbarModule,
  ],
  providers: [ // Servicios

  ],
  bootstrap: [ // El componente principal
    SeleccionComponent
  ]
})
export class SeleccionModule {
}
