import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contraseña.component.html',
  styleUrls: ['./recuperar-contraseña.component.css']
})
export class RecuperarContraseñaComponent {
  tittleAlert:string = '';

  constructor(  private router: Router ) { }

  

  recuperarContrasena( ) {


    Swal.showLoading();
    
    this.router.navigate(['/nuevaContraseña'])
}
}