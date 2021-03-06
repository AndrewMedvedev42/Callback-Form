import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function Server() {
  const port = process.env.PORT || 8000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
}
Server();
