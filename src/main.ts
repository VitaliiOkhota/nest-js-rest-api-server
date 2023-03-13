import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {JwtAuthGuard} from './auth/jwt-auth.guard';
import {ValidationPipe} from './pipes/validation.pipe';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Урок по просунутому back-end')
    .setDescription('Документація REST API')
    .setVersion('1.0.0')
    .addTag('NestJS, Postgresql')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)
  // app.useGlobalGuards(JwtAuthGuard) отримати доступ до endpoints можуть лише зареєстровані користувачі

  // app.useGlobalPipes(new ValidationPipe())


  await app.listen(PORT, () => {
    console.log(`Сервер запущено на порту = ${PORT}`)
  });
}
start();
