import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EspacioTrabajo } from '../../entities/espacio-trabajo.entity';
import { CreateEspacioTrabajoDto } from './dto/create-espacio-trabajo.dto';
import { UpdateEspacioTrabajoDto } from './dto/update-espacio-trabajo.dto';

@Injectable()
export class EspacioTrabajoService {
  constructor(
    @InjectRepository(EspacioTrabajo)
    private espacioTrabajoRepository: Repository<EspacioTrabajo>,
  ) {}

  create(
    createEspacioTrabajoDto: CreateEspacioTrabajoDto,
  ): Promise<EspacioTrabajo> {
    const espacioTrabajo = this.espacioTrabajoRepository.create(
      createEspacioTrabajoDto,
    );
    return this.espacioTrabajoRepository.save(espacioTrabajo);
  }

  findAll(): Promise<EspacioTrabajo[]> {
    return this.espacioTrabajoRepository.find();
  }

  findOne(id: number): Promise<EspacioTrabajo> {
    return this.espacioTrabajoRepository.findOne({ where: { id_espacio: id } });
  }

  async update(
    id: number,
    updateEspacioTrabajoDto: UpdateEspacioTrabajoDto,
  ): Promise<EspacioTrabajo> {
    await this.espacioTrabajoRepository.update(id, updateEspacioTrabajoDto);
    return this.espacioTrabajoRepository.findOne({ where: { id_espacio: id } });
  }

  async remove(id: number): Promise<void> {
    await this.espacioTrabajoRepository.delete(id);
  }
}
