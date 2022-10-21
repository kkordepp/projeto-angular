import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FuncionarioModel } from './funcionarios/funcionario/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { }

  cadastrarFuncionario(funcionario: FuncionarioModel): Observable<any>
  {
    return this.http.post("http://localhost:3000/funcionarios/", funcionario);
  }

  listarFuncionarios(): Observable<any>
  {
    return this.http.get("http://localhost:3000/funcionarios/");
  }

  atualizarFuncionario(id: any, funcionario: FuncionarioModel): Observable<any>
  {
    return this.http.put("http://localhost:3000/funcionarios/".concat(id), funcionario);
  }

  removerFuncionario(id: any)
  {
    return this.http.delete("http://localhost:3000/funcionarios/".concat(id));
  }
}
