import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RaviModule } from './ravi/ravi.module';

@Module({
  imports: [RaviModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
