import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {LugaresService} from "./lugares.service";

@Controller('Lugares')
export class LugaresController {
/*
    constructor(private _jugadorService: LugaresService) {
    }

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const jugadores = await this._jugadorService.traerTodos();
        return response.send(jugadores);
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._jugadorService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Get('porEquipo/:idEquipo')
    async obtenerJugadoresPorEquipo(
        @Param() paramParams,
        @Res() response
    ) {
        const jugadores = await this._jugadorService.traerJugadoresPorEquipo(paramParams.idEquipo);
        return response.send(jugadores);
    }

    @Get('por/id/:idJugador')
    async obtenerJugadorPorId(
        @Param() paramParams,
        @Res() response
    ) {
        const jugador = await this._jugadorService.traerJugadorPorId(paramParams.idJugador);
        return response.send(jugador);
    }

    @Post()
    async crearJugadorBase() {
        const jugadores = this._jugadorService.crearJugadores();
        return jugadores;
    }*/

}