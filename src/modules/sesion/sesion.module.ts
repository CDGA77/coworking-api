import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sesion } from '../../entities/sesion.entity';
import { Reserva } from '../../entities/reserva.entity';
import { SesionService } from './sesion.service';
import { SesionController } from './sesion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sesion, Reserva])],
  providers: [SesionService],
  controllers: [SesionController],
})
export class SesionModule {}
