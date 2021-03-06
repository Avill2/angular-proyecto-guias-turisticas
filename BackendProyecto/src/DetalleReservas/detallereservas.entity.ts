import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { type } from 'os';
import { LugaresEntity } from '../Lugares/lugares.entity';
import {ReservasEntity} from "../Reservas/reservas.entity";

@Entity('DetalleReservas')
export class DetallereservaEntity {
    @PrimaryGeneratedColumn()
    id_detalle_reserva: string;
    @Column({ length: 30 })
    estado: string;
    @Column({ length: 30 })
    fecha: string;
    @Column({length: 30})
    hora: string;
    @ManyToOne(type => ReservasEntity, detalleRserva => detalleRserva.detalleReservaId)
    detallesReservas: ReservasEntity;
    @ManyToOne(type => LugaresEntity, lugar => lugar.detalles)
    Lugares: LugaresEntity;

}