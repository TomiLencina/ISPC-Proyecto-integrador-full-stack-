import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PaginaPruebaComponent } from './pagina-prueba/pagina-prueba.component';
import { CarteraComponent } from './cartera/cartera.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { AppRoutingModule } from '../app-routing.module';
import { RecuperarContraseñaComponent } from './recuperar_contraseña/recuperar-contraseña/recuperar-contraseña.component';
import { NuevaContraseñaComponent } from './recuperar_contraseña/nueva-contraseña/nueva-contraseña.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';



@NgModule({
  declarations: [

    PaginaPruebaComponent,
    CarteraComponent,
    PerfilUsuarioComponent,
    RegistroComponent,
    RecuperarContraseñaComponent,
    NuevaContraseñaComponent,
    SuscripcionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PaginaPruebaComponent,
    CarteraComponent,
    PerfilUsuarioComponent,
    RegistroComponent,
    RecuperarContraseñaComponent,
    NuevaContraseñaComponent,
    SuscripcionComponent
  ]
})
export class PagesModule { }
