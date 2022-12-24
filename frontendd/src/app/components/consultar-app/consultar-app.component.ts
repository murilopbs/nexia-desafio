import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultar-app',
  templateUrl: './consultar-app.component.html',
  styleUrls: ['./consultar-app.component.css']
})
export class ConsultarAppComponent {
  remover(id: number){
    var us = {
      "id" : id
    };
    this.http.post("http://localhost:3000/removerApp", us).subscribe(
      (Response) => console.log(Response),
      (Error) => console.log(Error)
    );
    window.location.reload();
    
  }

  editar(id: number){
    this.router.navigate(['editarApp', id]);
  }

  apps: any;
  ap: any;
  id: any;
  pessoas: Array<string> = [];
  pessoasId: Array<string> = [];
  users: any;
  userr: any;
  
  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
    var us = {
      "id" : this.id
    };
    this.http.post('http://localhost:3000/appId', us).subscribe(data => {
        this.apps = data;
        for(let app of this.apps){
          this.ap = app;
          console.log(this.ap);
        }
        var uss = {
          "perfil" : this.ap.perfil
        };
        this.http.post('http://localhost:3000/usersPerfil', uss).subscribe(data => {
          this.users = data;
          for(let user of this.users){
            this.pessoas.push(user.nome);
            this.pessoasId.push(user.id);
          }
        });
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
}
