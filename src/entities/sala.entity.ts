import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EspacioTrabajo } from './espacio-trabajo.entity';

@Entity()
export class Sala {
  @PrimaryGeneratedColumn()
  id_sala: number;

  @Column({ length: 50 })
  nombre: string;

  @Column()
  filas: number;

  @Column()
  columnas: number;

  @OneToMany(() => EspacioTrabajo, (espacioTrabajo) => espacioTrabajo.sala)
  espacios: EspacioTrabajo[];
}
