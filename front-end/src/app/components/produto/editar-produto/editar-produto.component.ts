import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})

export class EditarProdutoComponent implements OnInit {

  produtos: any

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.urlProdutos().subscribe((res)=>{
      console.log(res)
      this.produtos = res
    })

  }

}
