import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent{

  remover(id: number){
    var us = {
      "id" : id
    };
    this.http.post("http://localhost:3000/remover", us).subscribe(
      (Response) => console.log(Response),
      (Error) => console.log(Error)
    );
    window.location.reload();
    
  }

  consultar(perfilN: number){
    this.router.navigate(['consultarPessoa', perfilN]);
  }

  editar(id: number){
    this.router.navigate(['editar', id]);
  }

  users: any;
  constructor(public http: HttpClient, private router: Router){
    this.http.get('http://localhost:3000/users').subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
}
