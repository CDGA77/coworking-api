import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const options = new DocumentBuilder()
    .setTitle('Coworking API')
    .setDescription('API para sistema de reserva de espacios de coworking')
    .setVersion('1.0')
    .addServer('http://localhost:3000/api/v1', 'API v1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1', app, document);

  // Prefix for API routes
  app.setGlobalPrefix('api/v1');

  // Start the app
  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000/api/v1`);
}
bootstrap();
