import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoria: any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.urlCategory().subscribe((res) => {
      console.log(res)
      this.categoria = res
    })
  }

}
