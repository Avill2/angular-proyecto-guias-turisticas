import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecepcionHotelComponent } from './recepcion-hotel/recepcion-hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    RecepcionHotelComponent,

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
