import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})

export class PerfilUsuarioComponent {
  isHidden= true;

  unhide(){
    this.isHidden = !this.isHidden
  }
}
