import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UsuarioEntity} from './usuario.entity';
import {Like, Repository} from 'typeorm';

@Injectable()
export class UsuarioService {

    listaUsuarios = [
        {id_usuario: 1, nombre: 'Wilson', apellido: 'Ramos', edad: 21, password: '1234', correo: 'wilson.ramos@live.com'},
       ];

    constructor(@InjectRepository(UsuarioEntity)
                private readonly usuarioRepository: Repository<UsuarioEntity>){
    }

    crearUsuario() {
        for (let usuarios in this.listaUsuarios) {
            const usuario = new UsuarioEntity();
            usuario.id_usuario = this.listaUsuarios[usuarios].id_usuario;
            usuario.nombre = this.listaUsuarios[usuarios].nombre;
            usuario.apellido = this.listaUsuarios[usuarios].apellido;
            usuario.edad = this.listaUsuarios[usuarios].edad;
            usuario.password = this.listaUsuarios[usuarios].password;
            usuario.correo = this.listaUsuarios[usuarios].correo
            this.usuarioRepository.save(usuario);
        }
        return this.usuarioRepository.find();
    }

  async traerTodos(): Promise<UsuarioEntity[]> {
    return await this.usuarioRepository.find();
  }

  async obtenerUsuarioPorCorreo(correo) {
    return await this.usuarioRepository.
    createQueryBuilder("usuario").where("usuario.correo = :correo", { correo: correo }).getOne();
  }

  async obtenerUsuarioPorId(id_usuario) {
    return await this.usuarioRepository.find({where: {id_usuario: id_usuario}})
  }

}