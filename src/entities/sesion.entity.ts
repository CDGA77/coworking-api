import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reserva } from './reserva.entity';

@Entity()
export class Sesion {
  @PrimaryGeneratedColumn()
  id_sesion: number;

  @Column()
  fecha_inicio: Date;

  @Column()
  fecha_fin: Date;

  @OneToMany(() => Reserva, (reserva) => reserva.sesion)
  reservas: Reserva[];
}
