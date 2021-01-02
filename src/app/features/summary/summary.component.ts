import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent  {
@Input() stock: any;

isNegative() {
  if (this.stock && this.stock.change < 0) {
    return true;
  } else {
    return false;
  }
}

isPositive() {
  return !this.isNegative;
}

}
