import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {
  produtos: any;
  categoria: any;


  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.urlProdutos().subscribe((res) => {
      console.log(res)
      this.produtos = res
    })

    this.service.urlCategory().subscribe((res) => {
      console.log(res)
    })

  }

}
