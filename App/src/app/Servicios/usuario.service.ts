
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  getUsuarioPorCorreo(correo, password) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get('http://localhost:1337/usuario/' + correo + '/' + password ,{headers: header});
  }
  getUsuarioPorId(id_usuario) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get('http://localhost:1337/usuario/por/id_usuario/' + id_usuario ,{headers: header});
  }
}
