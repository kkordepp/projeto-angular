import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from 'src/app/funcionarios.service';
import { FuncionarioModel } from './funcionario.model';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionario: FuncionarioModel = new FuncionarioModel();

  funcionarios: Array<any> = new Array();

  constructor(private FuncionariosService: FuncionariosService) { }

  ngOnInit(): void {
    this.listarFuncionarios();
  }

  atualizar(id: any)
  {
    this.FuncionariosService.atualizarFuncionario(id, this.funcionario).subscribe(funcionario =>
      { this.funcionario = new FuncionarioModel(); this.listarFuncionarios(); }, err =>
      { console.log('erro ao atualizar os dados', err)}
    )
  }

  remover(id: number)
  {
    this.FuncionariosService.removerFuncionario(id).subscribe(funcionario =>
      { this.funcionario = new FuncionarioModel(); this.listarFuncionarios(); }, err =>
      { console.log('erro ao remover funcionario', err)}
    )
  }

  cadastrar()
  {
    console.log(this.funcionario)
    this.FuncionariosService.cadastrarFuncionario(this.funcionario).subscribe(funcionario =>
      { this.funcionario = new FuncionarioModel, this.listarFuncionarios()},
      err => {console.log('erro ao cadastrar funcionario'), err}
    );
  }

  listarFuncionarios()
  {
    this.FuncionariosService.listarFuncionarios().subscribe(funcionarios => {this.funcionarios = funcionarios},
      err => console.log('erro ao listar os funcionarios', err));
  }
}
