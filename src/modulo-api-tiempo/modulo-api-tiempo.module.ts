import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiTiempoDataController } from '../api-tiempo-data/api-tiempo-data.controller';
import { SrvApiTiempoService } from '../srv-api-tiempo/srv-api-tiempo.service';
@Module({
  imports: [HttpModule],
  controllers: [ApiTiempoDataController],
  providers: [SrvApiTiempoService],
})
export class ModuloApiTiempoModule {}
