import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-apps',
  templateUrl: './listar-apps.component.html',
  styleUrls: ['./listar-apps.component.css']
})
export class ListarAppsComponent {
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

  consultar(idA: number){
    this.router.navigate(['consultarApp', idA]);
  }

  apps: any;
  gestao: Array<string> = [];
  constructor(public http: HttpClient, private router: Router){
    this.http.get('http://localhost:3000/apps').subscribe(data => {
      this.apps = data;
      console.log(this.apps);
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
}
