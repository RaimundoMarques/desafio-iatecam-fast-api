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
    { label: 'Home', action: this.clickHome.bind(this) }
  ];

  private clickHome() {
    alert('Click da HOME')
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
