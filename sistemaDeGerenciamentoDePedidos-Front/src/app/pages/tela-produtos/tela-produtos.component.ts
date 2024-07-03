import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TelaAddProdutoComponent } from '../tela-add-produto/tela-add-produto.component';
import { Produto } from '../../core/models/Produto';
import { ProdutosService } from '../../core/services/produtos.service';
import { DialogDeleteComponent } from '../../core/components/dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-tela-produtos',
  templateUrl: './tela-produtos.component.html',
  styleUrl: './tela-produtos.component.scss',
})
export class TelaProdutosComponent implements OnInit {
  public displayedColumns: string[] = [
    'id',
    'nome',
    'preco',
    'descricao',
    'estoque',
    'actions',
  ];

  produtos: Produto[] = [];

  constructor(
    private snackbar: MatSnackBar,
    public dialog: MatDialog,
    private produtoService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((data: Produto[]) => {
      this.produtos = data;
    });
  }

  public deleteCategory(element: Produto) {
    this.dialog
      .open(DialogDeleteComponent, {
        disableClose: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.produtoService
            .deleteProdutos(element.idProduto)
            .subscribe(() => {
              this.carregarProdutos();
            });
        } else {
          this.snackbar.open('Falha ao apagar produto!', 'Fechar', {
            duration: 3000,
          });
        }
      });
  }

  public createNewProduct() {
    const dialogRef = this.dialog.open(TelaAddProdutoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.carregarProdutos();
      }
    });
  }
}
