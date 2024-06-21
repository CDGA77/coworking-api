import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from './reserva.entity';

@Entity()
export class Sesion {
  @PrimaryGeneratedColumn()
  id_sesion: number;

  @Column({ type: 'timestamp' })
  fecha_inicio: Date;

  @Column({ type: 'timestamp' })
  fecha_fin: Date;

  @OneToMany(() => Reserva, (reserva) => reserva.sesion)
  reservas: Reserva[];
}
