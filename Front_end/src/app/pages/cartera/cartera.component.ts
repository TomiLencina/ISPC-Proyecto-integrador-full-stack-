import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApirequestService } from 'src/app/services/apirequest.service';
import { ServicioActivoService } from 'src/app/services/servicio-activo.service';

class Asset {

  simbolo: string;
  broker: string;
  fecha_compra!: Date
  precio_compra: number;
  cantidad: number;
  ultimo_precio: number;

  constructor(simbolo:string, broker: string, fecha_compra:Date, precio_compra: number, cantidad: number, ultimo_precio: number) {


      this.simbolo = simbolo,
      this.broker = broker,
      this.precio_compra = precio_compra,
      this.cantidad = cantidad,
      this.ultimo_precio = ultimo_precio
  }
}




@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.css']
})




export class CarteraComponent implements OnInit, AfterViewInit {


  @ViewChild("newBuy") newBuyRef!: ElementRef

  newBuy!: HTMLElement;
  inputs: Array<HTMLInputElement> = [];
  portfolio!: Array<any>;
  quantity!: number;
  totalValue!: number;
  totalProfit!: number;
  requestServices!: ApirequestService

  constructor(requests: ApirequestService) {

    this.requestServices = requests
  }

  ngAfterViewInit(): void {
    this.newBuy = this.newBuyRef.nativeElement;

  }

  ngOnInit(): void {



    this.portfolio = listaDeActivosComprados;

    this.requestServices.getPortfolioById(2).subscribe((res) => {
      console.log(res);

      this.portfolio = res.activos
    })

    this.portfolio = listaDeActivosComprados;

    this.requestServices.getPortfolioById(2).subscribe((res) => {
      console.log(res);

      this.portfolio = res.activos;
      this.calculateTotal();
    })

    // this.calculateTotal();
  }

  addAsset(): void {
    this.newBuy.querySelectorAll("input").forEach(el => this.inputs.push(el));
    console.log(this.inputs);
    this.portfolio.push(new Asset(this.inputs[0].value, this.inputs[1].value, new Date(), Number(this.inputs[2].value), Number(this.inputs[3].value), Number(this.inputs[4].value)))
    this.calculateTotal()
  }

  calculateTotal() {

    this.totalValue = this.portfolio.reduce((a, b) => a + b.ultimo_precio * b.cantidad, 0);
    this.totalProfit = this.portfolio.reduce((a, b) => a + (b.ultimo_precio - b.precio_compra) * b.cantidad, 0);
  }

  getProfit(asset: any): number {
    return (asset.ultimo_precio - asset.precio_compra) * asset.cantidad
  }

  getProfitPerc(asset: any): number {
    return Number((this.getProfit(asset) / (asset.precio_compra * asset.cantidad) * 100).toFixed(2))

    this.totalValue = this.portfolio.reduce((a, b) => a + b.ultimo_precio * b.quantity, 0);
    this.totalProfit = this.portfolio.reduce((a, b) => a + (b.ultimo_precio - b.precio_compra) * b.cantidad, 0);
  }

  onCellEdit(event: any, asset: any, property: string) {
    const newValue = event.target.textContent;
    asset[property] = newValue;
    this.calculateTotal();
  }

}



let listaDeActivosComprados =
  [

    {
      "simbolo": "ETH",
      "fecha_compra": "2021-01-01",
      "precio_compra": 2000,
      "ultimo_precio": 3000,
      "cantidad": 5,
      "posicion_valorizada": 15000,
      "broker": "Binance"
    },
    {
      "simbolo": "BTC",
      "fecha_compra": "2021-02-15",
      "precio_compra": 50000,
      "ultimo_precio": 60000,
      "cantidad": 1,
      "posicion_valorizada": 60000,
      "broker": "KuCoin"
    },
    {
      "simbolo": "CEPU",
      "fecha_compra": "2021-03-10",
      "precio_compra": 100,
      "ultimo_precio": 120,
      "cantidad": 500,
      "posicion_valorizada": 60000,
      "broker": "Invertir Online"
    },
    {
      "simbolo": "AMZN",
      "fecha_compra": "2021-04-01",
      "precio_compra": 3000,
      "ultimo_precio": 3200,
      "cantidad": 10,
      "posicion_valorizada": 32000,
      "broker": "Bull Market"
    },
    {
      "simbolo": "GGAL",
      "fecha_compra": "2021-05-01",
      "precio_compra": 100,
      "ultimo_precio": 110,
      "cantidad": 200,
      "posicion_valorizada": 22000,
      "broker": "Invertir Online"
    },
    {
      "simbolo": "TGS",
      "fecha_compra": "2021-06-01",
      "precio_compra": 200,
      "ultimo_precio": 180,
      "cantidad": 100,
      "posicion_valorizada": 18000,
      "broker": "Bull Market"
    },
    {
      "simbolo": "PERSONAL",
      "fecha_compra": "2021-07-01",
      "precio_compra": 50,
      "ultimo_precio": 60,
      "cantidad": 500,
      "posicion_valorizada": 30000,
      "broker": "Invertir Online"
    },
    {
      "simbolo": "KO",
      "fecha_compra": "2021-08-01",
      "precio_compra": 50,
      "ultimo_precio": 55,
      "cantidad": 1000,
      "posicion_valorizada": 55000,
      "broker": "Bull Market"
    }
  ]
