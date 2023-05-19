import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteraComponent } from './pages/cartera/cartera.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecuperarContraseñaComponent } from './pages/recuperar_contraseña/recuperar-contraseña/recuperar-contraseña.component';
import { NuevaContraseñaComponent } from './pages/recuperar_contraseña/nueva-contraseña/nueva-contraseña.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TerminosycondicionesComponent } from './pages/terminosycondiciones/terminosycondiciones.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { NoticiasDeInversionesComponent } from './pages/noticias-de-inversiones/noticias-de-inversiones.component';



const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "cartera", component: CarteraComponent },
  { path: "perfil_usuario", component: PerfilUsuarioComponent },
  { path: "registro", component: RegistroComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'recuperar-contraseña', component: RecuperarContraseñaComponent },
  { path: 'nueva-contraseña', component: NuevaContraseñaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terminos_y_condiciones', component: TerminosycondicionesComponent },
  { path: 'quienes_somos', component: QuienesSomosComponent },
  { path: 'premium', component: SuscripcionComponent},
  { path: 'noticias', component: NoticiasDeInversionesComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
