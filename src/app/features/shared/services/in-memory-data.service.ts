import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stocks = [
      {
        id: 'APPL',
        symbol: 'APPL',
        lastTradePriceOnly: 221.07,
        change: -2.7799988,
        changeInPercent: -0.0124190245,
      },
      {
        id: 'GOOG',
        symbol: 'GOOG',
        lastTradePriceOnly: 1162.82,
        change: -14.540039,
        changeInPercent: -0.012349698,
      },
      {
        id: 'FB',
        symbol: 'FB',
        lastTradePriceOnly: 162,
        change: -3.9400024,
        changeInPercent: -0.023743536,
      },
      {
        id: 'TWTR',
        symbol: 'TWTR',
        lastTradePriceOnly: 199,
        change: -7.8400024,
        changeInPercent: -0.43743536,
      },
      {
        id: 'AMZN',
        symbol: 'AMZN',
        lastTradePriceOnly: 259,
        change: -1.8400024,
        changeInPercent: -0.13743536,
      }
    ];

    return {stocks};
  }
}
