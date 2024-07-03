import { Component, OnInit } from '@angular/core';
import { NotaFiscal } from '../../core/models/NotaFiscal';
import { MatDialog } from '@angular/material/dialog';
import { NotafiscalService } from '../../core/services/notafiscal.service';
import { Cliente } from '../../core/models/Cliente';
import { ClientesService } from '../../core/services/clientes.service';
import { ProdutosService } from '../../core/services/produtos.service';
import { Produto } from '../../core/models/Produto';
import { Observable } from 'rxjs';
import { DialogDeleteComponent } from '../../core/components/dialog-delete/dialog-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tela-meus-pedidos',
  templateUrl: './tela-meus-pedidos.component.html',
  styleUrl: './tela-meus-pedidos.component.scss',
})
export class TelaMeusPedidosComponent implements OnInit {
  public displayedColumns: string[] = [
    'id',
    'idCliente',
    'idProduto',
    'quantidade',
    'dataEmissao',
    'valorTotal',
    'actions',
  ];

  pedidos: NotaFiscal[] = [];
  clientesCache: { [key: number]: string } = {};
  produtosCache: { [key: number]: string } = {};

  constructor(
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    public pedidoService: NotafiscalService,
    public clienteService: ClientesService,
    public produtoService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.carregarNotas();
    this.carregarProdutos();
    this.carregarClientes();
  }

  carregarNotas(): void {
    this.pedidoService.getPedidos().subscribe((data: NotaFiscal[]) => {
      this.pedidos = data;
    });
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((data: Produto[]) => {
      data.forEach((produto) => {
        this.produtosCache[produto.idProduto] = produto.nome || 'Desconhecido';
      });
    });
  }

  carregarClientes(): void {
    this.clienteService.getClientes().subscribe((data: Cliente[]) => {
      data.forEach((cliente) => {
        this.clientesCache[cliente.idUsuario] = cliente.nome || 'Desconhecido';
      });
    });
  }

  getNomeCliente(idCliente: number): string {
    return this.clientesCache[idCliente];
  }

  getNomeProduto(idProduto: number): string {
    return this.produtosCache[idProduto];
  }

  deletePedido(element: NotaFiscal) {
    this.dialog
      .open(DialogDeleteComponent, { disableClose: true })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.pedidoService.deletePedido(element.id).subscribe(() => {
            this.carregarNotas();
          });
        } else {
          this.snackbar.open('Pedido não apagado!', 'Fechar', {
            duration: 3000,
          });
        }
      });
  }
}
