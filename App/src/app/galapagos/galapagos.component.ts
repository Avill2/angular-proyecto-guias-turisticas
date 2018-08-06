import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../Servicios/usuario.service';
import {Usuario} from '../Interfaces/usuario';

@Component({
  selector: 'app-galapagos',
  templateUrl: './galapagos.component.html',
  styleUrls: ['./galapagos.component.css'],
  providers: [UsuarioService]
})
export class GalapagosComponent implements OnInit {
  ngOnInit() {
    // Empezar la logica de la pantalla
    console.log('On Init');
  }

}
