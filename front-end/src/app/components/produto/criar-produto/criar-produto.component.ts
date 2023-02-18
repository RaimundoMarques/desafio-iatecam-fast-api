import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})

export class CriarProdutoComponent implements OnInit {
  category: any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.urlCategory().subscribe((res) => {
      console.log(res)
      this.category = res
    })

  }

}
