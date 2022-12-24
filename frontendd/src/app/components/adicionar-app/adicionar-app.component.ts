import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-app',
  templateUrl: './adicionar-app.component.html',
  styleUrls: ['./adicionar-app.component.css']
})
export class AdicionarAppComponent {
  tipo: string = "3";
  getValues(val: any){
    val.perfil = this.tipo;
    this.http.post("http://localhost:3000/criarApp", val).subscribe(
      (Response) => console.log(Response),
      (Error) => console.log(Error)
    );
    this.router.navigateByUrl('/listarApps');
  };
  constructor(private http: HttpClient, private router: Router){
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
}
