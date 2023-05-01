import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'my-app',
  templateUrl: './recuperar-contraseña.component.html',
  styleUrls: ['./recuperar-contraseña.component.css']
})
export class RecuperarContraseñaComponent {
  tittleAlert:string = '';

  constructor(  private router: Router ) { }

  

  recuperarContraseña( ) {


    Swal.showLoading();
    
    this.router.navigate(['/nuevaContraseña'])
}
}