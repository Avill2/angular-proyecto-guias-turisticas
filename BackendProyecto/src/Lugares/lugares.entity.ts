import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DetallereservaEntity } from '../DetalleReservas/detallereservas.entity';

@Entity('Lugares')
export class LugaresEntity {
    @PrimaryGeneratedColumn()
    id_lugar: number;
    @Column({length: 50})
    tipo_lugar: string;
    @Column({length: 30})
    ubicacion_lugar: string;
    @Column({length: 3})
    horario_lugar: string;
    @OneToMany(type => DetallereservaEntity, detallesReservaEntity => detallesReservaEntity.Lugares)
    detalles: LugaresEntity[];
}