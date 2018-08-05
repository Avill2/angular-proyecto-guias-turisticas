import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {LugaresEntity} from "./lugares.entity";
import {Like, Repository} from "typeorm";
import {DetallereservaEntity} from "../DetalleReservas/detallereservas.entity";

@Injectable()
export class LugaresService {
/*
    listaJugadores = [
        {
            'id': 1,
            'nombreCamiseta': 'Messi',
            'numeroCamiseta': 10,
            'nombreCompletoJugador': 'Lionel Messi',
            'poderEspecialDos': 'Medio',
            'fechaIngresoEquipo': '16102004',
            'goles': 50,
            'urlImg': 'https://www.diariogol.com/uploads/s1/57/29/84/9/leo-messi-dice-no_15_970x597.jpeg',
            'equipoId': 1
        },
        {
            'id': 2,
            'nombreCamiseta': 'Ronaldo',
            'numeroCamiseta': 7,
            'nombreCompletoJugador': 'Cristiano Ronaldo',
            'poderEspecialDos': 'Delantero',
            'fechaIngresoEquipo': '10072018',
            'goles': 45,
            'urlImg': 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/07/18/15319267746680.jpg',
            'equipoId': 3
        },
        {
            'id': 3,
            'nombreCamiseta': 'Valencia',
            'numeroCamiseta': 25,
            'nombreCompletoJugador': 'Antonio Valencia',
            'poderEspecialDos': 'Volante',
            'fechaIngresoEquipo': '10112009',
            'goles': 13,
            'urlImg': 'https://s.hs-data.com/bilder/spieler/gross/25587.jpg',
            'equipoId': 5
        },
        {
            'id': 4,
            'nombreCamiseta': 'Neymar',
            'numeroCamiseta': 10,
            'nombreCompletoJugador': 'Neymar da Silva',
            'poderEspecialDos': 'Delantero',
            'fechaIngresoEquipo': '03082017',
            'goles': 25,
            'urlImg': 'https://files.antena2.com.co/antena2/public/styles/imagen_despliegue/public/2018-07/neymar_psg_afp_0_0_0.jpg?itok=LjsU26K4',
            'equipoId': 8
        },
        {
            'id': 5,
            'nombreCamiseta': 'Mbappe',
            'numeroCamiseta': 29,
            'nombreCompletoJugador': 'Kylian Mbappé',
            'poderEspecialDos': 'Delantero',
            'fechaIngresoEquipo': '0662017',
            'goles': 20,
            'urlImg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kylian_Mbapp%C3%A9_Russia_2018.jpg/245px-Kylian_Mbapp%C3%A9_Russia_2018.jpg',
            'equipoId': 8
        },
        {
            'id': 6,
            'nombreCamiseta': 'Aguero',
            'numeroCamiseta': 10,
            'nombreCompletoJugador': 'Sergio Aguero',
            'poderEspecialDos': 'Delantero',
            'fechaIngresoEquipo': '05032015',
            'goles': 22,
            'urlImg': 'http://static.t13.cl/images/sizes/1200x675/1520791709-aguero.jpg',
            'equipoId': 6
        },
        {
            'id': 7,
            'nombreCamiseta': 'Neuer',
            'numeroCamiseta': 1,
            'nombreCompletoJugador': 'Manuel Neuer',
            'poderEspecialDos': 'Arquero',
            'fechaIngresoEquipo': '02012013',
            'goles': 3,
            'urlImg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Manuel_Neuer_850_0723.jpg/245px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_Manuel_Neuer_850_0723.jpg',
            'equipoId': 7
        },
        {
            'id': 8,
            'nombreCamiseta': 'Ramos',
            'numeroCamiseta': 4,
            'nombreCompletoJugador': 'Sergio Ramos',
            'poderEspecialDos': 'Defensa',
            'fechaIngresoEquipo': '02082009',
            'goles': 6,
            'urlImg': 'https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/03/10/Recortada/930069748_20180310155538-kkSD-U441415399549d6H-992x558@LaVanguardia-Web.jpg',
            'equipoId': 2
        },
        {
            'id': 9,
            'nombreCamiseta': 'Bacca',
            'numeroCamiseta': 70,
            'nombreCompletoJugador': 'Carlos Bacca',
            'poderEspecialDos': 'Delantero',
            'fechaIngresoEquipo': '17052017',
            'goles': 10,
            'urlImg': 'https://futbolete.com/wp-content/uploads/2016/11/carlos-bacca-milan-pescara.jpg',
            'equipoId': 4
        },
        {
            'id': 10,
            'nombreCamiseta': 'Suarez',
            'numeroCamiseta': 9,
            'nombreCompletoJugador': 'Luis Suarez',
            'poderEspecialDos': 'Delantero',
            'fechaIngresoEquipo': '08102015',
            'goles': 40,
            'urlImg': 'https://www.donbalon.com/assets/images/noticias/78955_636676956570340017.jpg',
            'equipoId': 1
        },
        {
            'id': 11,
            'nombreCamiseta': 'Navas',
            'numeroCamiseta': 1,
            'nombreCompletoJugador': 'Keylor Navas',
            'poderEspecialDos': 'Arquero',
            'fechaIngresoEquipo': '09052016',
            'goles': 1,
            'urlImg': 'https://cdn.futbolperuano.com/sdi/2018/07/19/keylor-navas-asi-se-despide-del-real-madrid-656561.jpg',
            'equipoId': 2
        },
        {
            'id': 12,
            'nombreCamiseta': 'Rooney',
            'numeroCamiseta': 10,
            'nombreCompletoJugador': 'Wayne Rooney',
            'poderEspecialDos': 'Delantero',
            'fechaIngresoEquipo': '08112008',
            'goles': 35,
            'urlImg': 'https://cdn.images.express.co.uk/img/dynamic/67/590x/Wayne-Rooney-807732.jpg',
            'equipoId': 5
        },
    ];

    constructor(@InjectRepository(LugaresEntity)
                private readonly jugadorRepository: Repository<LugaresEntity>) {
    }

    crearJugadores() {
        for (var jugadores in this.listaJugadores) {
            const jugador = new LugaresEntity();
            jugador.id = this.listaJugadores[jugadores].id;
            jugador.nombreCamiseta = this.listaJugadores[jugadores].nombreCamiseta;
            jugador.numeroCamiseta = this.listaJugadores[jugadores].numeroCamiseta;
            jugador.nombreCompletoJugador = this.listaJugadores[jugadores].nombreCompletoJugador;
            jugador.poderEspecialDos = this.listaJugadores[jugadores].poderEspecialDos;
            jugador.fechaIngresoEquipo = this.listaJugadores[jugadores].fechaIngresoEquipo;
            jugador.goles = this.listaJugadores[jugadores].goles;
            jugador.urlImg = this.listaJugadores[jugadores].urlImg;
            const equipo = new ReservasEntity();
            equipo.id = this.listaJugadores[jugadores].equipoId;
            jugador.equipoId = equipo;
            this.jugadorRepository.save(jugador);
        }
        return this.jugadorRepository.find();
    }

    async traerTodos(): Promise<LugaresEntity[]> {
        return await this.jugadorRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.jugadorRepository.find({nombreCamiseta: Like("%" + parametroBusqueda + "%")});
    }

    async traerJugadoresPorEquipo(equipoID): Promise<LugaresEntity[]> {
        return await this.jugadorRepository.find({where: {equipoId: equipoID}});
    }

    async traerJugadorPorId(idJugador): Promise<LugaresEntity[]> {
        return await this.jugadorRepository.find({where: {id: idJugador}});
    }
*/
}