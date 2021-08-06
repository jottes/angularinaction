import {Component} from '@angular/core';
import {StockInterface} from './features/shared/model/stock-interface';
import {StocksService} from './features/shared/services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['APPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
