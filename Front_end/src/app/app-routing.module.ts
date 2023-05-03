import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteraComponent } from './pages/cartera/cartera.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecuperarContraseñaComponent } from './pages/recuperar_contraseña/recuperar-contraseña/recuperar-contraseña.component';
import { NuevaContraseñaComponent } from './pages/recuperar_contraseña/nueva-contraseña/nueva-contraseña.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "cartera", component: CarteraComponent },
  { path: "perfil_usuario", component: PerfilUsuarioComponent },
  { path: "registro", component: RegistroComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'recuperarContraseña', component: RecuperarContraseñaComponent },
  { path: 'nuevaContraseña', component: NuevaContraseñaComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
