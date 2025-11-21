import { Test, TestingModule } from '@nestjs/testing';
import { RaviService } from './ravi.service';

describe('RaviService', () => {
  let service: RaviService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaviService],
    }).compile();

    service = module.get<RaviService>(RaviService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
