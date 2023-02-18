import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListarProdutoComponent } from './components/produto/listar-produto/listar-produto.component';
import { EditarProdutoComponent } from './components/produto/editar-produto/editar-produto.component';
import { CriarProdutoComponent } from './components/produto/criar-produto/criar-produto.component';
import { ExcluirProdutoComponent } from './components/produto/excluir-produto/excluir-produto.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'listar-produto', component: ListarProdutoComponent},
  {path: 'editar-produto', component: EditarProdutoComponent},
  {path: 'criar-produto', component: CriarProdutoComponent},
  {path: 'excluir-produto', component: ExcluirProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
