import {Component} from '@angular/core';
import {UsuarioService} from '../Servicios/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Usuario} from '../Interfaces/usuario';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: [
    './seleccion.component.css'
  ],
  providers: [UsuarioService],
})
export class SeleccionComponent {

  usuarioActual: Usuario;
  constructor(private _usuarioService: UsuarioService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(
      params => {
        this.getUsuarioPorId(params['idUsuarioActual']);
      });
  }


  ngOnInit() {
    // Empezar la logica de la pantalla
    console.log('On Init');
  }
  getUsuarioPorId(id_usuario) {
    this._usuarioService.getUsuarioPorId(id_usuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    );
  }
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
      imagen : '/assets/ecuador1.1.jpg',
      texto : 'Ecuador es un país con una vasta e inigualable riqueza natural y '+'cultural. La diversidad de sus cuatro regiones ha dado lugar a cientos de '+'miles de especies de flora y fauna. Cuenta con alrededor de 1640 clases de pájaros. Las especies de mariposas bordean las 4.500, los reptiles 345, '+'los anfibios 358 y los mamíferos 258, entre otras. Ecuador está considerado como uno de los 17 países donde está concentrada la mayor biodiversidad'+' del planeta, siendo además el mayor país con biodiversidad por km² del mundo. La mayor parte de su fauna y flora vive en 26 áreas protegidas'+' por el Estado. Así mismo, ofrece atractivos históricos como Quito, gastronómicos y una variedad de culturas y tradiciones.'
    }
  ];

  imagenContactenos = [
    {
      id:1,
      imagen:'/assets/contactenos_opt.jpg'
    }
  ];



}

