import { Controller, Get, Param, Response } from '@nestjs/common';
import { SrvApiTiempoService } from '../srv-api-tiempo/srv-api-tiempo.service';
import { HttpService } from '@nestjs/axios';
import OpenWeatherAPI from 'openweather-api-node';


@Controller('api-tiempo-data')
export class ApiTiempoDataController {
  constructor(
    private http: HttpService,
    private readonly itemsService: SrvApiTiempoService,
  ) {}
  items: any[];
  /*@Get(':city')
  async getWeather(@Param() params) {
    const apiKey = 'd92d754701ff867a897adddd0e4bfb85';
    const url = `${this.apiUrl}?q=${params.city}&appid=${apiKey}`;
    return `Estás consultando el producto ${params.city}`;
    //const data = await this.itemsService.getSomeData(url);
    //return data;
  }*/
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
    /* const table = [];
      const today = new Date().getDay();
      data.forEach((e, i) => {
        // eslint-disable-next-line prefer-const
        let newE = {};
        newE['day'] = days[today + i > 6 ? today + i - 7 : today + i];
        newE['temp'] = `${e.weather.temp.cur}\u00B0F`;
        newE['rain'] = `${e.weather.rain}mm`;
        newE['description'] = e.weather.description;
        table.push(newE);
      });*/
      return res.json(data);
    });
    /*getDailyForecast().then((data) => {
      return res.json(data);
    });*/

    //const data = await this.itemsService.getSomeData(url);
    //return `Estás consultando el producto ${url}`;
    //return this.itemsService.findAll();
  }
}
