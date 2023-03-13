import { Test, TestingModule } from '@nestjs/testing';
import { SrvApiTiempoService } from './srv-api-tiempo.service';

describe('SrvApiTiempoService', () => {
  let service: SrvApiTiempoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SrvApiTiempoService],
    }).compile();

    service = module.get<SrvApiTiempoService>(SrvApiTiempoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
