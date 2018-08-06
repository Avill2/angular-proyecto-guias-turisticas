import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReservasEntity } from '../Reservas/reservas.entity';

@Entity('Usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id_usuario: number;
    @Column({length: 50})
    nombre: string;
    @Column({length: 30})
    apellido: string;
    @Column()
    edad: number;
    @Column({length: 30})
    password: string;
    @Column({length: 30})
    correo: string;
    @OneToMany(type => ReservasEntity, reservasEntity => reservasEntity.usuarioId)
    reserva: ReservasEntity[];
}