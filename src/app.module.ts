import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiTiempoDataController } from './api-tiempo-data/api-tiempo-data.controller';
import { SrvApiTiempoService } from './srv-api-tiempo/srv-api-tiempo.service';
import { ModuloApiTiempoModule } from './modulo-api-tiempo/modulo-api-tiempo.module';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [ModuloApiTiempoModule, HttpModule],
  controllers: [AppController, ApiTiempoDataController],
  providers: [AppService, SrvApiTiempoService],
})
export class AppModule {}
