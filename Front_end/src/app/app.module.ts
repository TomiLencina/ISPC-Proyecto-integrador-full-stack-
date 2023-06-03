import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicioActivoService } from './services/servicio-activo.service';
import { UserService } from './service/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PagesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
