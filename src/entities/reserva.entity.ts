import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';
import { EspacioTrabajo } from './espacio-trabajo.entity';
import { Sesion } from './sesion.entity';

@Entity({ name: 'reserva' })
export class Reserva {
  @PrimaryGeneratedColumn()
  id_reserva: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.reservas)
  usuario: Usuario;

  @ManyToOne(() => EspacioTrabajo, (espacio) => espacio.reservas)
  espacio: EspacioTrabajo;

  @ManyToOne(() => Sesion, (sesion) => sesion.reservas)
  sesion: Sesion;

  @Column({ type: 'timestamp' })
  fecha_reserva: Date;
}
