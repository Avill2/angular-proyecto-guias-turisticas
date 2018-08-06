import {Body, Controller, Get, Param, Post, Put, Req, Res} from '@nestjs/common';
import {UsuarioService} from './usuario.service';
import {UsuarioEntity} from './usuario.entity';
import { NotFoundException } from '../exceptions/NotFound.exception';

@Controller('usuario')
export class UsuarioController {

    constructor(private _usuarioService: UsuarioService) {}
    @Get()
    async listarTodos(
      @Res() response,
      @Req() request,
    ) {
        const usuarios = await this._usuarioService.traerTodos();
        return response.send(usuarios);
    }
  @Get('/:correo/:password')
    async getUsuarioPorCorreo(
    @Param() paramParams,
    @Res() response,
  ) {
    const usuario = await this._usuarioService.obtenerUsuarioPorCorreo(paramParams.correo);

    if (usuario.password === paramParams.password) {
      return response.send(
        {respuesta: 'Aceptado',
          id: usuario.id_usuario});
    } else {
      throw new NotFoundException(
        'Los datos son incorrectos',
        'error',
        4,
      );
    }
  }
  @Get('por/id_usuario/:id_usuario')
  async obtenerUsuarioPorId(
    @Param() paramParams,
    @Res() response,
  ) {
    const usuario = await this._usuarioService.obtenerUsuarioPorId(paramParams.id_usuario);
    return response.send(usuario);
  }
  @Post()
  async crearUsuariosBase() {
    const usuarios = this._usuarioService.crearUsuario();
    return usuarios;
  }
}