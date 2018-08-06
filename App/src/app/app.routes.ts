import {Routes} from "@angular/router";
import {InicioComponent} from "./inicio/inicio.component";
import {LoginComponent} from "./login/login.component";
import {RecepcionHotelComponent} from "./recepcion-hotel/recepcion-hotel.component";
import {RegistroComponent} from "./registro/registro.component";
import {SeleccionComponent} from "./seleccion/seleccion.component";
import {RecepcionRestauranteComponent} from './recepcion-restaurante/recepcion-restaurante.component';
import {CostaComponent} from './costa/costa.component';
import {SierraComponent} from './sierra/sierra.component';
import {OrienteComponent} from './oriente/oriente.component';
import {GalapagosComponent} from './galapagos/galapagos.component';
import {ForgotpassComponent} from './forgotpass/forgotpass.component';
import {ResetpassComponent} from './resetpass/resetpass.component';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent},
  {
    path: 'inicio/:idUsuarioActual',
    component: SeleccionComponent},
  {
    path: 'recepcion-hotel',
    component: RecepcionHotelComponent},
  {
    path: 'registro',
    component: RegistroComponent},
  {
    path: 'recepcion-restaurante',
    component: RecepcionRestauranteComponent},

  {
    path: 'costa',
    component: CostaComponent},
  {
    path: 'sierra',
    component: SierraComponent},

  {
    path: 'oriente',
    component: OrienteComponent},
  {
    path: 'galapagos',
    component: GalapagosComponent},
  {
    path: 'forgotpass',
    component: ForgotpassComponent},
  {
    path: 'resetpass',
    component: ResetpassComponent
  },
  {
    path: '**',
    redirectTo : '/login'
  }]
