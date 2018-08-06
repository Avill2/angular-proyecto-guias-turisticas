import { Component, OnInit, ɵmarkDirty } from '@angular/core';
import {MarkerService} from "../services/marker.service";
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
  providers: [MarkerService]
})
export class MapaComponent implements OnInit {
  title: string = 'Mapa';
  //nivel de zoom
  zoom: number = 10;

  //Posicion de inicio
  lat: number = -0.1865938;
  lng: number = -78.570625;

  //valores
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;
  //Marcadores
  markers: marker[];
  constructor(private _markerService:MarkerService) { 
  this.markers = this._markerService.getMarkers();
}


  ngOnInit() {
  }

}
