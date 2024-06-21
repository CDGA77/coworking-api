import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EspacioTrabajo } from '../../entities/espacio-trabajo.entity';
import { Reserva } from '../../entities/reserva.entity';

@Injectable()
export class EspacioTrabajoService {
  constructor(
    @InjectRepository(EspacioTrabajo)
    private readonly espacioTrabajoRepository: Repository<EspacioTrabajo>,
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
  ) {}

  async getEspaciosDisponibles(salaId: number, sesionId: number) {
    return this.espacioTrabajoRepository
      .createQueryBuilder('et')
      .leftJoinAndSelect('et.reservas', 'r', 'r.id_sesion = :sesionId', {
        sesionId,
      })
      .where('et.id_sala = :salaId', { salaId })
      .andWhere('r.id_reserva IS NULL')
      .getMany();
  }

  async getEspaciosOcupados(salaId: number, sesionId: number) {
    return this.espacioTrabajoRepository
      .createQueryBuilder('et')
      .innerJoinAndSelect('et.reservas', 'r', 'r.id_sesion = :sesionId', {
        sesionId,
      })
      .where('et.id_sala = :salaId', { salaId })
      .getMany();
  }

  async getEspaciosPorUsuario(idUsuario: number) {
    return this.espacioTrabajoRepository
      .createQueryBuilder('et')
      .innerJoinAndSelect('et.reservas', 'r', 'r.id_usuario = :idUsuario', {
        idUsuario,
      })
      .getMany();
  }

  async getEspaciosPorSesion(idSesion: number) {
    return this.espacioTrabajoRepository
      .createQueryBuilder('et')
      .innerJoinAndSelect('et.reservas', 'r', 'r.id_sesion = :idSesion', {
        idSesion,
      })
      .getMany();
  }
}
