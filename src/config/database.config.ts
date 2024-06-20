import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EspacioTrabajo } from 'src/entities/espacio-trabajo.entity';
import { Reserva } from 'src/entities/reserva.entity';
import { Sala } from 'src/entities/sala.entity';
import { Sesion } from 'src/entities/sesion.entity';
import { Usuario } from 'src/entities/usuario.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [EspacioTrabajo, Reserva, Sala, Sesion, Usuario],
  synchronize: true,
  extra: {
    ssl: true,
  },
};
