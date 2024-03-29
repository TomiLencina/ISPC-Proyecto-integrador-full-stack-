import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApirequestService } from 'src/app/services/apirequest.service';
import { ServicioActivoService } from 'src/app/services/servicio-activo.service';
import { TokenService } from 'src/app/services/token.service';

class Asset {

  simbolo: string;
  broker: string;
  fecha_compra!: Date
  precio_compra: number;
  cantidad: number;
  ultimo_precio: number;

  constructor(simbolo: string, broker: string, fecha_compra: Date, precio_compra: number, cantidad: number, ultimo_precio: number) {


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
  operationForm!: FormGroup;
  token!: any;

  constructor(private formBuilder: FormBuilder, private requests: ApirequestService, private tokenHandler: TokenService, private router: Router) {
  }

  ngAfterViewInit(): void {
    this.newBuy = this.newBuyRef.nativeElement;

  }

  // ngOnInit(): void {



  //   this.portfolio = listaDeActivosComprados;

  //   this.requestServices.getPortfolioById(2).subscribe((res) => {
  //     this.portfolio = res.activos
  //   })

  //   this.portfolio = listaDeActivosComprados;

  //   this.requestServices.getPortfolioById(2).subscribe((res) => {
  //     console.log(res);

  //     this.portfolio = res.activos;
  //     this.calculateTotal();
  //   })

  //   // this.calculateTotal();
  // }

  ngOnInit(): void {

    this.token = this.tokenHandler.getToken()
    if (!this.token) {
      this.router.navigate(["/login"]);
      return
    }

    this.requests.getPortfolio(this.token).subscribe(
      (res) => {
        console.log(res);

        this.portfolio = res
      },

      (error) => {
        this.router.navigate(["/login"]);

      }

    )

    this.operationForm = this.formBuilder.group({
      simbol: [''],
      broker: [''],
      buy_price: [''],
      quantity: [''],
      last_price: ['']

    });

  }

  onSubmit(event: Event): void {




    const newOperation = {
      "asset": {
        "simbol": this.operationForm.get("simbol")?.value,
        "type": "Stock",
        "currency": "USD",
        "broker": this.operationForm.get("broker")?.value
      },
      "buy_date": "2023-05-17",
      "buy_price": this.operationForm.get("buy_price")?.value,
      "quantity": this.operationForm.get("quantity")?.value,
      "last_price": this.operationForm.get("last_price")?.value
    }

    console.log("error");

    this.requests.addOperation(this.token, newOperation).subscribe(res=>{
      console.log(res);
      
    })


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

  getProfit(operation: any): number {
    return (operation.last_price - operation.buy_price) * operation.quantity
  }

  getProfitPerc(operation: any): number {
    return Number((this.getProfit(operation) / (operation.buy_price * operation.quantity) * 100).toFixed(2))

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
