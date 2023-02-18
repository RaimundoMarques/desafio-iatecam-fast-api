import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceService } from './service/service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ListarProdutoComponent } from './components/produto/listar-produto/listar-produto.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './components/produto/editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './components/produto/excluir-produto/excluir-produto.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutoComponent,
    CriarProdutoComponent,
    EditarProdutoComponent,
    ExcluirProdutoComponent,
    HomeComponent,
    CategoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
