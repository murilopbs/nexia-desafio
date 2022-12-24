import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.css']
})
export class AdicionarUsuarioComponent {
  tipo: string = "3";
  getValues(val: any){
    val.perfil = this.tipo;
    this.http.post("http://localhost:3000/criar", val).subscribe(
      (Response) => console.log(Response),
      (Error) => console.log(Error)
    );
    this.router.navigateByUrl('');
  };
  constructor(private http: HttpClient, private router: Router){
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
  
}
