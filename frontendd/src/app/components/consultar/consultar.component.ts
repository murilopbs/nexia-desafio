import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent {
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
  id: any;
  aplicativos: Array<string> = [];
  aplicativosId: Array<string> = [];
  users: any;
  userr: any;
  
  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
    var us = {
      "id" : this.id
    };
    this.http.post('http://localhost:3000/userId', us).subscribe(data => {
      this.users = data;
      for(let user of this.users){
        this.userr = user;
        console.log(this.userr);
      }
      var uss = {
        "perfil" : this.userr.perfil
      };
      this.http.post('http://localhost:3000/appPerfil', uss).subscribe(data => {
        this.apps = data;
        for(let app of this.apps){
          this.aplicativos.push(app.nome);
          this.aplicativosId.push(app.id);
        }
      });
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
}
