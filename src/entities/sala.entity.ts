import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EspacioTrabajo } from './espacio-trabajo.entity';

@Entity({ name: 'sala' })
export class sala {
  @PrimaryGeneratedColumn()
  id_sala: number;

  @Column({ length: 50 })
  nombre: string;

  @Column()
  filas: number;

  @Column()
  columnas: number;

  @OneToMany(() => EspacioTrabajo, (espacio) => espacio.sala)
  espacios: EspacioTrabajo[];
}
