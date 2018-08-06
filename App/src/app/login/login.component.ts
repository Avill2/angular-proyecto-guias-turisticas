import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../Servicios/usuario.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  correo: string = '';
  password: string = '';
  respuesta;
  constructor(private _usuarioService: UsuarioService,
              private _router: Router){
    this.correo = '';
    this.password = '';
  }
  ngOnInit() {
  }
  ingresar() {
    this._usuarioService.getUsuarioPorCorreo(this.correo, this.password).subscribe(
      (result: any) => {
        this.respuesta = result;
        console.log(this.respuesta);
        if (true) {
          const url = ['/inicio', this.respuesta.id];
          this._router.navigate(url);
        } else {
        }
      }
    );
  }

}
