import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { EditarProdutosComponent } from './components/produtos/editar-produtos/editar-produtos.component';
import { CadastrarProdutosComponent } from './components/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { ExcluirProdutosComponent } from './components/produtos/excluir-produtos/excluir-produtos.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'produtos/listar-produtos', component: ListarProdutosComponent},
  {path: 'produtos/editar-produtos', component: EditarProdutosComponent},
  {path: 'produtos/cadastrar-produtos', component: CadastrarProdutosComponent},
  {path: 'produtos/excluir-produtos', component: ExcluirProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
