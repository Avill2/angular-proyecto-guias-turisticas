import {Component, OnInit, ɵmarkDirty} from '@angular/core';
import {MarkerService} from "../services/marker.service";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
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

    addMarker(){
    console.log("Adding Marker");
    if(this.markerDraggable == 'yes'){
      var isDraggable = true;

    }else{
      var isDraggable = false;

    }

    var newMarker = {
      name:this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
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

