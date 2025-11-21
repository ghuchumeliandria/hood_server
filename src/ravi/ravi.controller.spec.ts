import { Test, TestingModule } from '@nestjs/testing';
import { RaviController } from './ravi.controller';
import { RaviService } from './ravi.service';

describe('RaviController', () => {
  let controller: RaviController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaviController],
      providers: [RaviService],
    }).compile();

    controller = module.get<RaviController>(RaviController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
