import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nueva-contrasena',
  templateUrl: './nueva-contraseña.component.html',
  styleUrls: ['./nueva-contraseña.component.css']
})
export class NuevaContraseñaComponent {

  constructor(  private router: Router ) { }

  recuperarContraseña() {

    Swal.showLoading();
    
    this.router.navigate(['/Login'])
}
}

