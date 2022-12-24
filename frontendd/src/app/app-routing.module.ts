import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarAppComponent } from './components/adicionar-app/adicionar-app.component';

import { AdicionarUsuarioComponent } from './components/adicionar-usuario/adicionar-usuario.component';
import { ConsultarAppComponent } from './components/consultar-app/consultar-app.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { DetalharUsuarioComponent } from './components/detalhar-usuario/detalhar-usuario.component';
import { EditarAppComponent } from './components/editar-app/editar-app.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ListarAppsComponent } from './components/listar-apps/listar-apps.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'listar', pathMatch: 'full'},
  {path: 'adiconar', component:AdicionarUsuarioComponent},
  {path: 'listar', component: ListarUsuariosComponent},
  {path: 'listar/:id', component: DetalharUsuarioComponent},
  {path: 'editar/:id', component: EditarUsuarioComponent},
  {path: 'listarApps', component: ListarAppsComponent},
  {path: 'adicionarApp', component: AdicionarAppComponent},
  {path: 'editarApp/:id', component: EditarAppComponent},
  {path: 'consultarPessoa/:id', component: ConsultarComponent},
  {path: 'consultarApp/:id', component: ConsultarAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
