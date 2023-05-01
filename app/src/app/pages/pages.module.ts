import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';


@NgModule({
  declarations: [QuienesSomosComponent],
  imports: [
    CommonModule
  exports: [QuienesSomosComponent]  
  ]
})
export class PagesModule {}
