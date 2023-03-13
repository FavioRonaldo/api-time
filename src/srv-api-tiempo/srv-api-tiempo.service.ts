import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
@Injectable()
export class SrvApiTiempoService {
  constructor(private httpService: HttpService) {}

  getSomeData(url): Observable<any> {
    return this.httpService.get(url);
  }
  private items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  findAll(): any[] {
    return this.items;
  }
}
