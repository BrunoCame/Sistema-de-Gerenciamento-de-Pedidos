import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TelaAddProdutoComponent } from './pages/tela-add-produto/tela-add-produto.component';
import { TelaProdutosComponent } from './pages/tela-produtos/tela-produtos.component';
import { TelaAddClienteComponent } from './pages/tela-add-cliente/tela-add-cliente.component';
import { TelaClienteComponent } from './pages/tela-cliente/tela-cliente.component';
import { DialogDeleteComponent } from './core/components/dialog-delete/dialog-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TelaAddPedidoComponent } from './pages/tela-add-pedido/tela-add-pedido.component';
import { TelaMeusPedidosComponent } from './pages/tela-meus-pedidos/tela-meus-pedidos.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    HeaderComponent,
    FooterComponent,
    TelaAddProdutoComponent,
    TelaProdutosComponent,
    TelaAddClienteComponent,
    TelaClienteComponent,
    DialogDeleteComponent,
    TelaAddPedidoComponent,
    TelaMeusPedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideAnimationsAsync('noop'), provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
