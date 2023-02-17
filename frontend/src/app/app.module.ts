import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { EditarProdutosComponent } from './components/produtos/editar-produtos/editar-produtos.component';
import { ExcluirProdutosComponent } from './components/produtos/excluir-produtos/excluir-produtos.component';
import { CadastrarProdutosComponent } from './components/produtos/cadastrar-produtos/cadastrar-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarProdutosComponent,
    EditarProdutosComponent,
    ExcluirProdutosComponent,
    CadastrarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
