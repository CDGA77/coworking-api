import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspacioTrabajo } from '../../entities/espacio-trabajo.entity';
import { Reserva } from '../../entities/reserva.entity';
import { EspacioTrabajoService } from './espacio-trabajo.service';
import { EspacioTrabajoController } from './espacio-trabajo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EspacioTrabajo, Reserva])],
  providers: [EspacioTrabajoService],
  controllers: [EspacioTrabajoController],
})
export class EspacioTrabajoModule {}
