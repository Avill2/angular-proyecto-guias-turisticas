import {Body, Controller, Get, Param, Post, Put, Req, Res} from '@nestjs/common';
import {UsuarioService} from './usuario.service';
import {UsuarioEntity} from './usuario.entity';
import {NotFoundException} from "../exceptions/NotFound.exception";

@Controller('usuario')
export class UsuarioController {

    constructor(private _usuarioService: UsuarioService) {}
    @Post()
    async crearUsuariosBase() {
        const usuarios = this._usuarioService.crearUsuario();
        return usuarios;
    }
    @Post('crearUsuario')
    async crearUsuariodesdePagina(){
      const usuario = this._usuarioService.crearusuariodesdebase();
      return usuario;
    }
}