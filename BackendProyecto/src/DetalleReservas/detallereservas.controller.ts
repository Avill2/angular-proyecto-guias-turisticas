import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {DetallereservasService} from "./detallereservas.service";
import {DetallereservaEntity} from "./detallereservas.entity";

@Controller('DetalleReservas')
export class DetallereservasController {

    /*constructor(private _equipoService: DetallereservasService) {}

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const equipos = await this._equipoService.traerTodos();
        return response.send(equipos);
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._equipoService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Get('/porUsuario/:idUsuario')
    async obtenerEquipoPorUsuario(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._equipoService.traerEquipoPorUsuario(paramParams.idUsuario);
        return response.send(usuarios);
    }

    @Post()
    async crearEquipoBase() {
        const equipos = this._equipoService.crearEquipos();
        return equipos;
    }*/


}