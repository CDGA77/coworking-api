import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Sala } from './sala.entity';
import { Reserva } from './reserva.entity';

@Entity()
export class EspacioTrabajo {
  @PrimaryGeneratedColumn()
  id_espacio: number;

  @Column()
  fila: number;

  @Column()
  columna: number;

  @ManyToOne(() => Sala, (sala) => sala.espacios)
  sala: Sala;

  @OneToMany(() => Reserva, (reserva) => reserva.espacio)
  reservas: Reserva[];
}
