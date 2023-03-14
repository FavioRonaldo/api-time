import { Controller, Get, Param, Response } from '@nestjs/common';
import { SrvApiTiempoService } from '../srv-api-tiempo/srv-api-tiempo.service';
import { HttpService } from '@nestjs/axios';
import OpenWeatherAPI from 'openweather-api-node';

@Controller('api-tiempo-data')
export class ApiTiempoDataController {
  constructor(
    //private http: HttpService,
    private readonly itemsService: SrvApiTiempoService,
  ) {}
//This function makes the call to the Open Weatherm API through the OpenWeatherAPI library
  @Get(':city')
  async findAll(@Param() params, @Response() res) {
    const weather = new OpenWeatherAPI({
      key: 'd92d754701ff867a897adddd0e4bfb85',
      locationName: `${params.city}`,
      units: 'metric',
    });
    /* weather.getCurrent().then((data) => {
      return res.json(data);
    });*/
    weather.getForecast().then((data) => {
      return res.json(data);
    });
  }
}
