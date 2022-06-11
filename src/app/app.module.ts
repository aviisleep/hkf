import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './componentes/shared/shared.module';

/* ---------------- COMPONENTES  ------------------ */
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, UsuarioComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
