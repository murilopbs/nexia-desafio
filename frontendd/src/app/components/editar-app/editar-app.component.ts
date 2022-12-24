import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-app',
  templateUrl: './editar-app.component.html',
  styleUrls: ['./editar-app.component.css']
})
export class EditarAppComponent {
  id: any;
  users: any;
  userr: any;
  tipo: string = "";
  getValues(val: any){
    val.nome == '' ? val.nome = this.userr.nome : val.nome = val.nome;
    //val.perfil == '' ? val.perfil = this.userr.perfil : val.perfil = val.perfil;
    this.tipo == "" ? val.perfil = this.userr.perfil : val.perfil = this.tipo;
    val.id = this.id;
    console.log(this.id);
    this.http.put("http://localhost:3000/editarApp", val).subscribe(
      (Response) => console.log(Response),
      (Error) => console.log(Error)
    );
    this.router.navigateByUrl('/listarApps');
  };
  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
    var us = {
      "id" : this.id
    };
    this.http.post('http://localhost:3000/appId', us).subscribe(data => {
      this.users = data;
      for(let user of this.users){
        this.userr = user;
      }
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
}
