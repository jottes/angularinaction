import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockInterface } from '../model/stock-interface';

const stocks: Array<string> = ['APPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service = 'https://angular2-in-action-api.heroku.com';


@Injectable({
  providedIn: 'root',
})
export class StocksService {

  constructor(private httpClient: HttpClient) {}

get() {
  return stocks.slice();
}

add(stock) {
  stocks.push(stock);
  return this.get();
}

remove(stock) {
  stocks.splice(stocks.indexOf(stock), 1);
  return this.get();
}

load(symbols) {
  if (symbols) {
    return this.httpClient.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
  }
}


}
