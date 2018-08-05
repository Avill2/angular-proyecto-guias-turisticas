import { Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DetallereservaEntity} from "./detallereservas.entity";
import {Like, Repository} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";


@Injectable()
export class DetallereservasService {


   /* listaEquipos = [
        {'id': 1, 'nombre': 'FC Bacerlona', 'liga': 'BBVA', 'fechaCreacion': '29111899', 'numeroCopasInternacionales': 22, 'campeonActual': true, 'urlImg': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Barcelona_fc_Logo.png', 'usuarioId': 3},
        {'id': 2, 'nombre': 'Real Madrid', 'liga': 'BBVA', 'fechaCreacion': '06031902', 'numeroCopasInternacionales': 24, 'campeonActual': false, 'urlImg': 'https://vignette.wikia.nocookie.net/inciclopedia/images/4/4d/Real_madrid_logo.png/revision/latest?cb=20081102004028', 'usuarioId': 8},
        {'id': 3, 'nombre': 'Juventus', 'liga': 'Calcio', 'fechaCreacion': '01111897', 'numeroCopasInternacionales': 22, 'campeonActual': true, 'urlImg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Juventus_FC_2017_logo.svg/2000px-Juventus_FC_2017_logo.svg.png', 'usuarioId': 2},
        {'id': 4, 'nombre': 'Milan', 'liga': 'Calcio', 'fechaCreacion': '16121899', 'numeroCopasInternacionales': 21, 'campeonActual': false, 'urlImg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/2000px-Logo_of_AC_Milan.svg.png', 'usuarioId': 6},
        {'id': 5, 'nombre': 'Manchester United', 'liga': 'Premier League', 'fechaCreacion': '05041878', 'numeroCopasInternacionales': 68, 'campeonActual': false, 'urlImg': 'http://pngimg.com/uploads/manchester_united/manchester_united_PNG21.png', 'usuarioId': 4},
        {'id': 6, 'nombre': 'Manchester City', 'liga': 'Premier League', 'fechaCreacion': '06041880', 'numeroCopasInternacionales': 20, 'campeonActual': true, 'urlImg': 'http://pluspng.com/img-png/manchester-city-logo-png-manchester-city-supporters-club-logo-410.png', 'usuarioId': 7},
        { 'id': 7, 'nombre': 'FC Bayern Munich', 'liga': 'Bundesliga', 'fechaCreacion': '27021900', 'numeroCopasInternacionales': 11, 'campeonActual': true, 'urlImg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png', 'usuarioId': 5},
        { 'id': 8, 'nombre': 'PSG', 'liga': 'Ligue', 'fechaCreacion': '12081970', 'numeroCopasInternacionales': 2, 'campeonActual': true, 'urlImg': 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/768px-Paris_Saint-Germain_Logo.svg.png', 'usuarioId': 1}
    ];

    constructor(@InjectRepository(ReservasEntity)
                private readonly equipoRepository: Repository<ReservasEntity>){
    }

    crearEquipos() {
        for(var equipos in this.listaEquipos) {
            const equipo = new ReservasEntity();
            equipo.id = this.listaEquipos[equipos].id;
            equipo.nombre = this.listaEquipos[equipos].nombre;
            equipo.liga = this.listaEquipos[equipos].liga;
            equipo.fechaCreacion = this.listaEquipos[equipos].fechaCreacion;
            equipo.numeroCopasInternacionales =this.listaEquipos[equipos].numeroCopasInternacionales;
            equipo.campeonActual = this.listaEquipos[equipos].campeonActual;
            equipo.urlImg =  this.listaEquipos[equipos].urlImg;
            const usuario = new UsuarioEntity();
            usuario.id = this.listaEquipos[equipos].usuarioId;
            equipo.usuarioId = usuario;
            this.equipoRepository.save(equipo);
        }
        return this.equipoRepository.find();
    }

    async traerTodos(): Promise<ReservasEntity[]> {
        return await this.equipoRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.equipoRepository.find({ nombre: Like("%" + parametroBusqueda + "%") });
    }

    async traerEquipoPorUsuario(usuarioID): Promise<ReservasEntity[]> {
        return await this.equipoRepository.find({where: {usuarioId: usuarioID}});
    }*/


}
