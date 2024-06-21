import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sala } from '../../entities/sala.entity';
import { SalaService } from './sala.service';
import { SalaController } from './sala.controller';

@Module({
  imports: [TypeOrmModule.forFeature([sala])],
  controllers: [SalaController],
  providers: [SalaService],
})
export class SalaModule {}
