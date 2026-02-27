import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin : process.env.FRONTEND_URL,
    credentials : true,
    methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],

  })
  app.useGlobalPipes(
    new ValidationPipe({
     whitelist: true,
     transform: true,
    }),
  );
  console.log(process.env.FRONTEND_URL)
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();