import { Component, OnInit } from '@angular/core';

declare const paypal: any;

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  ngOnInit() {
    this.loadPayPalScript();
  }

  onUpgradeAccount() {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: '19.99'
              }
            }
          ]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
        });
      },
      onError: (err: any) => {
        console.error('Error al procesar el pago de PayPal:', err);
      }
    }).render('#paypal-button-container');
  }

  private loadPayPalScript() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AbSaf0CAHScyk0_5kOk7J89cgDSsufg2HwYK4DpwW29WdRYl0D2_HuAEIZLyXkNLyqp3iBRoTVbPS5--';
    script.async = true;
    script.onload = () => {

    };
    document.body.appendChild(script);
  }
}
