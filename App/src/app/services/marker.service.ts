import {Injectable} from '@angular/core';
import {Init} from '../init-markers';

@Injectable()
export class MarkerService extends Init{
  constructor(){
    super();
    console.log('MarkerService Inicializado...');
    this.load();
  }

  getMarkers(){
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker){
    //Adjuntar marcadores
    var markers = JSON.parse(localStorage.getItem('markers'));
    //Ingresarlo en el array
    markers.push(newMarker);
    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
