import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Sala } from './sala.entity';

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
}
