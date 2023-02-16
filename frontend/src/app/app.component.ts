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
    { label: 'Gerenciamento de Categoria', action: this.clickCategory.bind(this) },
    { label: 'Dispositivo Gestão', action: this.clickManagement.bind(this) },
    { label: 'Sair', action: this.clickEnd.bind(this) }
  ];

  private clickHome() {
    alert('Teste de Desenvolvimento FastAPI')
  }

  private clickCategory() {
    alert('Aplicação vai para a categoria')
  }

  private clickManagement(){
    alert("Aplicação vai para o gerenciamento de categoria")
  }

  private clickEnd(){
    alert("Sair da aplicação")
  }

}
