import {Component} from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: [
    './seleccion.component.css'
  ]
})
export class SeleccionComponent {
  title = 'my-app1';
  // Interpolacion
  mostrarComponente = false;
  contadorDesdePapa = 0;

  arregloUsuarios = [
    {
      id:1,
      imagen:'/assets/perfil.png',
      texto:'tatis1909'
    },
    {
      id:2,
      imagen:'/assets/perfil2.png',
      texto:'pedro'
    },
    {
      id:3,
      imagen:'/assets/perfil3.png',
      texto:'Jeff'
    },
    {
      id:4,
      imagen:'/assets/perfil4.png',
      texto:'Edd'
    },
    {
      id:5,
      imagen:'/assets/perfil5.png',
      texto:'Nancy'
    }
  ];

  imagenEcuador = [
    {
      id:1,
      imagen:'/assets/ecuador1.1.jpg',
      texto:'Ecuador es un país con una vasta e ' +
      'inigualable riqueza natural y cultural. La diversidad' +
      ' de sus cuatro regiones ha dado lugar a cientos ' +
      'de miles de especies de flora y fauna.'
    }
  ];

  imagenContactenos = [
    {
      id:1,
      imagen:'/assets/contactenos_opt.jpg'
    }
  ];


  titulo = 'Web';
  usuario = {
    nombre: 'Adrian',
    apellido: 'Eguez'
  };
  arregloNumeros = [5, 4, 3, 2, 1];
  mostrarTitulo = true;

  imagenUrl = "https://coryrylan.com/assets/images/cory-rylan-gde.png";
  imagenWidth = 200;

  html = `
  <h1>HOLA</h1>
  <p>Hola mundo</p>
  <img src="${this.imagenUrl}" alt="">
`;

  aumentarWidth(evento) {
    console.log('evento', evento);
    this.imagenWidth += 10;
  }

  restarWidth() {
    this.imagenWidth -= 10;
  }


  actualizarContador(contadorHijo) {
    console.log('Se ejecuto', contadorHijo);

    this.contadorDesdePapa = contadorHijo;
  }


}

