import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienesSomosComponent } from "./pages/quienes-somos/QuienesSomosComponent";

const routes: Routes = [
{ path:'quienes_somos', component: QuienesSomosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
