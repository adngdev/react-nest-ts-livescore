import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001,'0.0.0.0');
  console.log(`[${new Date(Date.now()).toUTCString()}] - HTTP server Info: Listening on ${await app.getUrl()}`);
}
bootstrap();
