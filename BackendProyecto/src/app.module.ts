import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DetallereservasController} from "./DetalleReservas/detallereservas.controller";
import {LugaresController} from "./Lugares/lugares.controller";
import {DetallereservasService} from "./DetalleReservas/detallereservas.service";
import {AutorizacionController} from "./autorizacion.controller";
import {LugaresService} from "./Lugares/lugares.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./Usuario/usuario.entity";
import {DetallereservaEntity} from "./DetalleReservas/detallereservas.entity";
import {LugaresEntity} from "./Lugares/lugares.entity";
import {UsuarioController} from "./Usuario/usuario.controller";
import {UsuarioService} from "./Usuario/usuario.service";
import {ReservasController} from "./Reservas/reservas.controller";
import {ReservasEntity} from "./Reservas/reservas.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'turismoproyectobase',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          //ssl: true,
      }),
      TypeOrmModule.forFeature([ReservasEntity, DetallereservaEntity, LugaresEntity, UsuarioEntity]),
  ],
  controllers: [
      AppController,
      DetallereservasController,
      LugaresController,
      AutorizacionController,
      UsuarioController,
      ReservasController],
  providers: [
      AppService,
      DetallereservasService,
      LugaresService,
      UsuarioService,
     ],
})

export class AppModule {}
