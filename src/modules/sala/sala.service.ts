import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sala } from '../../entities/sala.entity';
import { CreateSalaDto } from './dtos/create-sala.dto';
import { UpdateSalaDto } from './dtos/update-sala.dto';

@Injectable()
export class SalaService {
  constructor(
    @InjectRepository(Sala)
    private salaRepository: Repository<Sala>,
  ) {}

  create(createSalaDto: CreateSalaDto): Promise<Sala> {
    const sala = this.salaRepository.create(createSalaDto);
    return this.salaRepository.save(sala);
  }

  findAll(): Promise<Sala[]> {
    return this.salaRepository.find();
  }

  findOne(id: number): Promise<Sala> {
    return this.salaRepository.findOne({ where: { id_sala: id } });
  }

  async update(id: number, updateSalaDto: UpdateSalaDto): Promise<Sala> {
    await this.salaRepository.update(id, updateSalaDto);
    return this.salaRepository.findOne({ where: { id_sala: id } });
  }

  async remove(id: number): Promise<void> {
    await this.salaRepository.delete(id);
  }
}
