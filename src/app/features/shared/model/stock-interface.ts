export interface StockInterface {
  id: string;
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}
