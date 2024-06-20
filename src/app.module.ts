import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { SalaModule } from './sala/sala.module';
import { SalaModule } from './modules/sala/sala.module';
import { EspacioTrabajoModule } from './modules/espacio-trabajo/espacio-trabajo.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { SesionModule } from './modules/sesion/sesion.module';
import { ReservaModule } from './modules/reserva/reserva.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(databaseConfig), SalaModule, EspacioTrabajoModule, UsuarioModule, SesionModule, ReservaModule],
})
export class AppModule {}
