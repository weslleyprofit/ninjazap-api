import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap( ) {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(); // Permite que o frontend acesse a API
  await app.listen(process.env.PORT || 3000); // Usa a porta do ambiente de produção
}
bootstrap();
