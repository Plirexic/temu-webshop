import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

  const config = new DocumentBuilder()
    .setTitle('Temu Webshop API')
    .setDescription('Die API für den Temu Webshop')
    .setVersion('1.0')
    .addTag('Items', 'Operationen für Items')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
  console.log('Backend running on http://localhost:3001');
  console.log('Swagger UI: http://localhost:3001/api');
  console.log('OpenAPI JSON: http://localhost:3001/api-json');
}
bootstrap();
