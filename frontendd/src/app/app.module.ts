import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdicionarUsuarioComponent } from './components/adicionar-usuario/adicionar-usuario.component';
import { DetalharUsuarioComponent } from './components/detalhar-usuario/detalhar-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ListarAppsComponent } from './components/listar-apps/listar-apps.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdicionarAppComponent } from './components/adicionar-app/adicionar-app.component';
import { EditarAppComponent } from './components/editar-app/editar-app.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { ConsultarAppComponent } from './components/consultar-app/consultar-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarUsuarioComponent,
    DetalharUsuarioComponent,
    ListarUsuariosComponent,
    EditarUsuarioComponent,
    ListarAppsComponent,
    AdicionarAppComponent,
    EditarAppComponent,
    ConsultarComponent,
    ConsultarAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
