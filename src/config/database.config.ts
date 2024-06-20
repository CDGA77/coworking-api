import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ep-summer-butterfly-a430v98i-pooler.us-east-1.aws.neon.tech',
  port: 5432,
  username: 'default',
  password: 'He1B5ZEMNCfQ',
  database: 'verceldb',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  extra: {
    ssl: true,
  },
};
