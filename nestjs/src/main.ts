import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

(async function bootstrap() {
  let app: INestApplication;

  try {
    app = await NestFactory.create(AppModule);
    app.enableShutdownHooks();
    await app.listen(3001);
  } catch (e: unknown) {
    console.error(e);
    console.error('Catastrophic failure. Shutting down process.');
    await app?.close();
    process.exit(1);
  }
})();
