import { Test, TestingModule } from '@nestjs/testing';
import { ApiTiempoDataController } from './api-tiempo-data.controller';

describe('ApiTiempoDataController', () => {
  let controller: ApiTiempoDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiTiempoDataController],
    }).compile();

    controller = module.get<ApiTiempoDataController>(ApiTiempoDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
