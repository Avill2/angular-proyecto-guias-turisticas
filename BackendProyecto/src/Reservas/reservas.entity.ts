import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../Usuario/usuario.entity';
import { DetallereservaEntity } from '../DetalleReservas/detallereservas.entity';

@Entity('Reservas')
export class ReservasEntity {
    @PrimaryGeneratedColumn()
    id_reserva: number;
    @Column({length: 10})
    fecha_ini: string;
    @Column({length: 10})
    fecha_fin: string;
    @ManyToOne(type => UsuarioEntity, usuarioEntity => usuarioEntity.reserva)
    usuarioId: ReservasEntity;
    @OneToMany(type => DetallereservaEntity, detallesReservaEntity => detallesReservaEntity.detallesReservas)
    detalleReservaId: ReservasEntity[];
}