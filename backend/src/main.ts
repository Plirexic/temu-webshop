import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS aktivieren, damit Requests von localhost:3000 (Next.js) angenommen werden
  app.enableCors({
    origin: 'http://localhost:3000', // oder '*' für alle Origins
  });

  // globaler ValidationPipe für DTO-Validierung
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  await app.listen(3001);
  console.log('Backend running on http://localhost:3001');
}
bootstrap();
