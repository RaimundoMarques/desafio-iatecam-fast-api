import { Component } from '@angular/core';
import { ServiceService } from './service/service.service';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos: any;
  categoria: any;
  
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
    window.location.href = "http://localhost:8000/"
  }
  private lsProd(){
    console.log("Listando os produtos")
  }
  private newProd(){
    console.log("Criando um produto")
  }
  private editProd(){
    console.log("Editando um produto")
  }
  private exclProd(){
    console.log("Escluindo um produto")
  }

  private close(){

  }
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    
    this.service.urlProdutos().subscribe((res) => {
      console.log(res)
    })

    this.service.urlCategory().subscribe((res) => {
      console.log(res)
    })

  }
}
