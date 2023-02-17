import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Array<any> = new Array();

  constructor(private produtosService: ProdutosService) {
  }

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtosService.listarProdutos().subscribe(produtos => {
      this.produtos = produtos
    }, err => {
      console.log("Erro ao listar os produtos", err)
    });
  }
}
