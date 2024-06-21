import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Reserva } from '../../entities/reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepository: Repository<Reserva>,
  ) {}

  async create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    const { usuarioId, espacioId, sesionId, fechaReserva } = createReservaDto;

    const reservaPartial: DeepPartial<Reserva> = {
      usuario: { id_usuario: usuarioId }, // Ejemplo: Asignando usuario a partir de usuarioId
      espacio: { id_espacio: espacioId }, // Ejemplo: Asignando espacio a partir de espacioId
      sesion: { id_sesion: sesionId }, // Ejemplo: Asignando sesión a partir de sesionId
      fecha_reserva: fechaReserva, // Asignando fecha de reserva
      // Aquí puedes asignar cualquier otra propiedad de Reserva que sea necesaria.
    };

    const reserva = this.reservaRepository.create(reservaPartial);
    return await this.reservaRepository.save(reserva);
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
