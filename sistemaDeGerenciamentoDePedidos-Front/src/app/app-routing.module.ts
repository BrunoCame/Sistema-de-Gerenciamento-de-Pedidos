import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { TelaAddProdutoComponent } from './pages/tela-add-produto/tela-add-produto.component';
import { TelaProdutosComponent } from './pages/tela-produtos/tela-produtos.component';
import { TelaClienteComponent } from './pages/tela-cliente/tela-cliente.component';
import { TelaAddPedidoComponent } from './pages/tela-add-pedido/tela-add-pedido.component';
import { TelaMeusPedidosComponent } from './pages/tela-meus-pedidos/tela-meus-pedidos.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'adicionar-produto', component: TelaAddProdutoComponent },
  { path: 'produtos', component: TelaProdutosComponent },
  { path: 'clientes', component: TelaClienteComponent },
  { path: 'adicionar-pedido', component: TelaAddPedidoComponent },
  { path: 'registro-pedidos', component: TelaMeusPedidosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
