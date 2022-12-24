import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  id: any;
  users: any;
  userr: any;
  tipo: string = "";
  getValues(val: any){
    val.nome == '' ? val.nome = this.userr.nome : val.nome = val.nome;
    val.RG == '' ? val.RG = this.userr.RG : val.RG = val.RG;
    val.CPF == '' ? val.CPF = this.userr.CPF : val.CPF = val.CPF;
    val.nascimento == '' ? val.nascimento = this.userr.nascimento : val.nascimento = val.nascimento;
    //val.perfil == '' ? val.perfil = this.userr.perfil : val.perfil = val.perfil;
    this.tipo == "" ? val.perfil = this.userr.perfil : val.perfil = this.tipo;
    val.id = this.id;
    console.log(this.id);
    this.http.put("http://localhost:3000/editar", val).subscribe(
      (Response) => console.log(Response),
      (Error) => console.log(Error)
    );
    this.router.navigateByUrl('');
  };
  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
    var us = {
      "id" : this.id
    };
    this.http.post('http://localhost:3000/userId', us).subscribe(data => {
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
