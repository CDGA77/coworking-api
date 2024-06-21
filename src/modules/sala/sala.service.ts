import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { sala } from '../../entities/sala.entity';
import { CreateSalaDto } from './dtos/create-sala.dto';
import { UpdateSalaDto } from './dtos/update-sala.dto';

@Injectable()
export class SalaService {
  constructor(
    @InjectRepository(sala)
    private salaRepository: Repository<sala>,
  ) {}

  create(createSalaDto: CreateSalaDto): Promise<sala> {
    const sala = this.salaRepository.create(createSalaDto);
    return this.salaRepository.save(sala);
  }

  findAll(): Promise<sala[]> {
    return this.salaRepository.find();
  }

  findOne(id: number): Promise<sala> {
    return this.salaRepository.findOne({ where: { id_sala: id } });
  }

  async update(id: number, updateSalaDto: UpdateSalaDto): Promise<sala> {
    await this.salaRepository.update(id, updateSalaDto);
    return this.salaRepository.findOne({ where: { id_sala: id } });
  }

  async remove(id: number): Promise<void> {
    await this.salaRepository.delete(id);
  }
}
