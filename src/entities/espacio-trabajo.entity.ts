import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { sala } from './sala.entity';
import { Reserva } from './reserva.entity';

@Entity({ name: 'espaciotrabajo' })
export class EspacioTrabajo {
  @PrimaryGeneratedColumn()
  id_espacio: number;

  @Column()
  fila: number;

  @Column()
  columna: number;

  @ManyToOne(() => sala, (sala) => sala.espacios)
  sala: sala;

  @OneToMany(() => Reserva, (reserva) => reserva.espacio)
  reservas: Reserva[];
}
