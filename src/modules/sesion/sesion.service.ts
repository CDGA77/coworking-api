import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sesion } from '../../entities/sesion.entity';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';

@Injectable()
export class SesionService {
  constructor(
    @InjectRepository(Sesion)
    private sesionRepository: Repository<Sesion>,
  ) {}

  create(createSesionDto: CreateSesionDto): Promise<Sesion> {
    const sesion = this.sesionRepository.create(createSesionDto);
    return this.sesionRepository.save(sesion);
  }

  findAll(): Promise<Sesion[]> {
    return this.sesionRepository.find();
  }

  findOne(id: number): Promise<Sesion> {
    return this.sesionRepository.findOne({ where: { id_sesion: id } });
  }

  async update(id: number, updateSesionDto: UpdateSesionDto): Promise<Sesion> {
    await this.sesionRepository.update(id, updateSesionDto);
    return this.sesionRepository.findOne({ where: { id_sesion: id } });
  }

  async remove(id: number): Promise<void> {
    await this.sesionRepository.delete(id);
  }
}
