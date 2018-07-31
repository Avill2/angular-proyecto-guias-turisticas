import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecepcionHotelComponent } from './recepcion-hotel/recepcion-hotel.component';
import { RecepcionRestauranteComponent } from './recepcion-restaurante/recepcion-restaurante.component';


@NgModule({
  declarations: [
    AppComponent,
    RecepcionHotelComponent,
    RecepcionRestauranteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
