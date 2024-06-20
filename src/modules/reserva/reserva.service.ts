import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from '../../entities/reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepository: Repository<Reserva>,
  ) {}

  create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    const reserva = this.reservaRepository.create(createReservaDto);
    return this.reservaRepository.save(reserva);
  }

  findAll(): Promise<Reserva[]> {
    return this.reservaRepository.find();
  }

  findOne(id: number): Promise<Reserva> {
    return this.reservaRepository.findOne({ where: { id_reserva: id } });
  }

  async update(
    id: number,
    updateReservaDto: UpdateReservaDto,
  ): Promise<Reserva> {
    await this.reservaRepository.update(id, updateReservaDto);
    return this.reservaRepository.findOne({ where: { id_reserva: id } });
  }

  async remove(id: number): Promise<void> {
    await this.reservaRepository.delete(id);
  }
}
