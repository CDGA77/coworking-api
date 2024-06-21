import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from './reserva.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 50 })
  contraseña: string;

  @OneToMany(() => Reserva, (reserva) => reserva.usuario)
  reservas: Reserva[];
}
