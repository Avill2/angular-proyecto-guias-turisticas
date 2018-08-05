export class Init{
  load(){
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
      console.log('No se han hallado marcadores');

      var markers = [
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
        }
      ];

        localStorage.setItem('markers', JSON.stringify(markers))
    }else {
      console.log('Cargando Marcadores ');
    }
  }
}
