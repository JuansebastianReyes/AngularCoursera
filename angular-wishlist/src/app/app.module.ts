import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoviajeComponent } from './destinoviaje/destinoviaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinoviajeComponent,
    ListaDestinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
