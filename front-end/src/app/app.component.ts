import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.clickHome.bind(this) },
    { label: 'Listar Produtos', action: this.lsProd.bind(this) },
    { label: 'Criar Produtos', action: this.newProd.bind(this) },
    { label: 'Editar Produtos', action: this.editProd.bind(this) },
    { label: 'Excluir Produtos', action: this.exclProd.bind(this) },
    { label: 'Sair', action: this.close.bind(this) }

  ];

  private clickHome() {
    console.log("Clicou em HOME")
    window.location.href = "http://localhost:4200/"
  }
  private lsProd() {
    console.log("Listando os produtos")
    window.location.href = '/listar-produto'
  }
  private newProd() {
    console.log("Criando um produto")
    window.location.href = '/criar-produto'
  }
  private editProd() {
    console.log("Editando um produto")
    window.location.href = '/editar-produto'
  }
  private exclProd() {
    console.log("Escluindo um produto")
    window.location.href = '/excluir-produto'
  }

  private close() {
    alert("Saindo da Aplicação")
    window.location.href = "https://www.google.com.br/"
  }
}
