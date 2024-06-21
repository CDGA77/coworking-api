import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EspacioTrabajo } from 'src/entities/espacio-trabajo.entity';
import { Reserva } from 'src/entities/reserva.entity';
import { sala } from 'src/entities/sala.entity';
import { Sesion } from 'src/entities/sesion.entity';
import { Usuario } from 'src/entities/usuario.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ep-summer-butterfly-a430v98i-pooler.us-east-1.aws.neon.tech',
  port: 5432,
  username: 'default',
  password: 'He1B5ZEMNCfQ',
  database: 'verceldb',
  entities: [sala, Reserva, EspacioTrabajo, Sesion, Usuario],
  synchronize: true,

  extra: {
    ssl: true,
  },
};
