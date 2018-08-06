import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {Usuario} from '../Interfaces/usuario';
import {UsuarioService} from '../Servicios/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [UsuarioService], }
)
export class InicioComponent implements OnInit{
  usuarioActual: Usuario;
  @Input()  imagen: string;
  @Input() texto: string;
  @Output() selecciono: EventEmitter<string>
    = new EventEmitter();


  // Propiedad del web component
  @Input() contador;
  // EVENTO del web component
  @Output() cambioElContador = new EventEmitter();

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

    console.log('Contador: ', this.contador);
  }
  getUsuarioPorId(id_usuario) {
    this._usuarioService.getUsuarioPorId(id_usuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    );
  }
}
