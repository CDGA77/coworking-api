import { Module } from '@nestjs/common';
import { SesionController } from './sesion.controller';
import { SesionService } from './sesion.service';

@Module({
  controllers: [SesionController],
  providers: [SesionService]
})
export class SesionModule {}
