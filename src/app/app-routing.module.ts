import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },
  { path: 'usuario', component: UsuarioComponent },
  // este path es para que el router pueda redirigir a una pagina que ya existe
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./componentes/dashboard/dashboard.module').then(
        (x) => x.DashboardModule
      ),
  },
  { path: '**', redirectTo: 'usuario', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
