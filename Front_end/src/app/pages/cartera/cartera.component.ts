import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

class Asset {

  symbol: string;
  exchange: string;
  bprice: number;
  quantity: number;
  lprice: number;
  profit: number;
  profitPer: number

  constructor(symbol: string, exchange: string, bprice: number, quantity: number, lprice: number) {

    this.symbol = symbol,
      this.exchange = exchange,
      this.bprice = bprice,
      this.quantity = quantity,
      this.lprice = lprice,
      this.profit = (this.lprice - this.bprice) * this.quantity,
      this.profitPer = Math.round(((this.lprice / this.bprice) - 1) * 100)

  }
}


@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.css']
})




export class CarteraComponent implements OnInit, AfterViewInit {


  @ViewChild("newBuy") newBuyRef!: ElementRef

  newBuy!:HTMLElement; 
  inputs: Array<HTMLInputElement> = [];
  portfolio!: Array<any>;
  quantity!: number;
  totalValue!:number;
  totalProfit!: number

  constructor() { }

  ngAfterViewInit(): void {
    this.newBuy = this.newBuyRef.nativeElement;
    
  }

  ngOnInit(): void {

    this.portfolio = [
      new Asset("BTCUSD", "BINANCE", 25800, 3, 29550),
      new Asset("CEPU:BCBA", "BULL MARKET", 255, 1, 210),
      new Asset("ETHUSD", "BINANCE", 2552, 5, 2850),
    ];

    this.calculateTotal();
  }

  addAsset(): void {
    this.newBuy.querySelectorAll("input").forEach(el => this.inputs.push(el));
    console.log(this.inputs);
    this.portfolio.push(new Asset(this.inputs[0].value, this.inputs[1].value, Number(this.inputs[2].value) ,Number(this.inputs[3].value),(Number(this.inputs[4].value))))
    this.calculateTotal()
  }

  calculateTotal(){
    this.totalValue = this.portfolio.reduce((a, b) => a + b.lprice * b.quantity, 0);
    this.totalProfit = this.portfolio.reduce((a, b) => a + b.profit, 0);
  }
}
