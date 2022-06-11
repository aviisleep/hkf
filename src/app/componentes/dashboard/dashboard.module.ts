import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { EstadocuentaComponent } from './estadocuenta/estadocuenta.component';
import { EstadopedidoComponent } from './estadopedido/estadopedido.component';

@NgModule({
  declarations: [DashboardComponent, InicioComponent, NavComponent, EstadocuentaComponent, EstadopedidoComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
