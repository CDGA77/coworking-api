import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sesion } from '../../entities/sesion.entity';
import { Reserva } from '../../entities/reserva.entity';

@Injectable()
export class SesionService {
  constructor(
    @InjectRepository(Sesion)
    private readonly sesionRepository: Repository<Sesion>,
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
  ) {}

  async getSesionesMasOcupadas() {
    return this.sesionRepository
      .createQueryBuilder('s')
      .leftJoinAndSelect('s.reservas', 'r')
      .groupBy('s.id_sesion, r.id_reserva') // Incluir r.id_reserva en GROUP BY
      .orderBy('COUNT(r.id_reserva)', 'DESC')
      .getMany();
  }

  async getSesionesMasDisponibles() {
    return this.sesionRepository
      .createQueryBuilder('s')
      .leftJoinAndSelect('s.reservas', 'r')
      .groupBy('s.id_sesion, r.id_reserva') // Incluir r.id_reserva en GROUP BY
      .orderBy('COUNT(r.id_reserva)', 'ASC')
      .getMany();
  }
}
