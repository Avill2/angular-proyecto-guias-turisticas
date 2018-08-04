import {Component, OnInit, ɵmarkDirty} from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  title: string = 'Mapa';
  //nivel de zoom
  zoom: number = 10;

  //Posicion de inicio
  lat: number = -0.1865938;
  lng: number = -78.570625;

  //Marcadores
  markers: marker[] = [
    {
    name: 'Restaurante La Delicia',
    lat: -0.1865938,
    lng: -78.570625,
    draggable: true
  },
    {
      name: 'Iglesia La compañía',
      lat: 0.1048552,
      lng: -78.1726885,
      draggable: true
    },
    {
      name: 'Parque La Carolina',
      lat: -0.4121619,
      lng: -78.3490167,
      draggable: true
    },

  ];

  constructor() { }


    clickedMarker(marker: marker, index: number){

    console.log('Clicked Marker: '+marker.name+' at index ' +index);
    }

    mapClicked($event: any){
    var newMarker = {
      name: 'Sin titulo',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }
    this.markers.push(newMarker)
    }

    markerDragEnd(marker: any, $event:any){
      console.log('dragEnd', marker, $event);

      var updMarker = {
        name: marker.name,
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
        draggable:false
      }
      var newLat = $event.coords.lat;
      var newLng = $event.coords.lng;
    }


  ngOnInit() {
  }

}
  //Tipo de marcador

  interface marker{
    name?:string;
    lat: number;
    lng: number;
    draggable: boolean;
}

