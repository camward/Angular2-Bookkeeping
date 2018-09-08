import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Bill } from '../models/bill.model';

@Injectable()
export class BillService {
  constructor(private http: Http) {}

  getBill(): Observable<Bill> {
    return this.http.get('http://localhost:3000/bill')
      .map((response: Response) => response.json());
  }

  getCurrency(base: string = 'RUB', access_key: string = '4baa02f16c64aa35f4b29d8edef77a80'): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=${access_key}&symbols=USD,RUB,EUR`)
      .map((response: Response) => response.json());
  }

}
