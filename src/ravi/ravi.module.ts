import { Module } from '@nestjs/common';
import { RaviService } from './ravi.service';
import { RaviController } from './ravi.controller';

@Module({
  controllers: [RaviController],
  providers: [RaviService],
})
export class RaviModule {}
