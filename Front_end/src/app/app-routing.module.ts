import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarContraseñaComponent } from './pages/recuperar_contraseña/recuperar-contraseña/recuperar-contraseña.component';
import { NuevaContraseñaComponent } from './pages/recuperar_contraseña/nueva-contraseña/nueva-contraseña.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [{path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{path: 'registro', component: RegistroComponent},
{path: 'recuperarContraseña', component: RecuperarContraseñaComponent},
{path: 'nuevaContraseña', component: NuevaContraseñaComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
