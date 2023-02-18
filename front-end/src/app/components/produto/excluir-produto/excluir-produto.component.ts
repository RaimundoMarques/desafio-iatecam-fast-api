import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css']
})
export class ExcluirProdutoComponent implements OnInit {

  produtos: any

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.urlProdutos().subscribe((res) => {
      console.log(res)
      this.produtos = res
    })
  }

}
