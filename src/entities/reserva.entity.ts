import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';
import { EspacioTrabajo } from './espacio-trabajo.entity';
import { Sesion } from './sesion.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id_reserva: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.reservas)
  usuario: Usuario;

  @ManyToOne(() => EspacioTrabajo)
  espacio: EspacioTrabajo;

  @ManyToOne(() => Sesion, (sesion) => sesion.reservas)
  sesion: Sesion;

  @Column()
  fecha_reserva: Date;
}
