import { Module } from '@nestjs/common';
import { EspacioTrabajoController } from './espacio-trabajo.controller';
import { EspacioTrabajoService } from './espacio-trabajo.service';

@Module({
  controllers: [EspacioTrabajoController],
  providers: [EspacioTrabajoService]
})
export class EspacioTrabajoModule {}
