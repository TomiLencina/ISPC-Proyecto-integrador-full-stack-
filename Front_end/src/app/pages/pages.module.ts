import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PaginaPruebaComponent } from './pagina-prueba/pagina-prueba.component';
import { CarteraComponent } from './cartera/cartera.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { AppRoutingModule } from '../app-routing.module';
import { RecuperarContraseñaComponent } from './recuperar_contraseña/recuperar-contraseña/recuperar-contraseña.component';
import { NuevaContraseñaComponent } from './recuperar_contraseña/nueva-contraseña/nueva-contraseña.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TerminosycondicionesComponent } from './terminosycondiciones/terminosycondiciones.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { NoticiasDeInversionesComponent } from './noticias-de-inversiones/noticias-de-inversiones.component';
import { ApirequestService } from '../services/apirequest.service';
import { UserService } from '../services/user.service';
import { ServicioActivoService } from '../services/servicio-activo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenService } from '../services/token.service';

@NgModule({

  providers: [
    ApirequestService,
    UserService,
    ServicioActivoService,
    TokenService
  ], 
  declarations: [

    PaginaPruebaComponent,
    CarteraComponent,
    PerfilUsuarioComponent,
    RegistroComponent,
    RecuperarContraseñaComponent,
    NuevaContraseñaComponent,
    HomeComponent,
    LoginComponent,
    TerminosycondicionesComponent,
    QuienesSomosComponent,
    SuscripcionComponent,
    NoticiasDeInversionesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginaPruebaComponent,
    CarteraComponent,
    PerfilUsuarioComponent,
    RegistroComponent,
    RecuperarContraseñaComponent,
    NuevaContraseñaComponent,
    HomeComponent,
    LoginComponent,
    TerminosycondicionesComponent,
    QuienesSomosComponent,
    SuscripcionComponent,
    NoticiasDeInversionesComponent
    
  ]
  })
export class PagesModule { }
