import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy, OnChanges {

  @Input()  imagen: string;
  @Input() texto: string;
  @Output() selecciono: EventEmitter<string>
    = new EventEmitter();


  // Propiedad del web component
  @Input() contador;
  // EVENTO del web component
  @Output() cambioElContador = new EventEmitter();

  constructor() {
    // Configuracion de servicios (providers) u otras configuraciones
    console.log('Constructor');
  }

  aumentarContador() {

    this.contador = this.contador + 1;

    this.cambioElContador
      .emit(this.contador);
  }

  ngOnInit() {
    // Empezar la logica de la pantalla

    console.log('On Init');

    console.log('Contador: ', this.contador);
  }

  ngOnDestroy() {
    console.log('On Destroy');
  }

  ngOnChanges(cambios) {
    console.log('On Changes', cambios);
  }

  seleccionoUsuario() {
    console.log('Selecciono', this.texto);
    this.selecciono.emit(this.texto);
  }}
