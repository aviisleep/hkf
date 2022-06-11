import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstadocuentaComponent } from './estadocuenta/estadocuenta.component';
import { EstadopedidoComponent } from './estadopedido/estadopedido.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'estadocuenta', component: EstadocuentaComponent },
      { path: 'estadopedido', component: EstadopedidoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
