import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../core/models/Cliente';
import { Produto } from '../../core/models/Produto';
import { ClientesService } from '../../core/services/clientes.service';
import { ProdutosService } from '../../core/services/produtos.service';
import { NotafiscalService } from '../../core/services/notafiscal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotaFiscal } from '../../core/models/NotaFiscal';

@Component({
  selector: 'app-tela-add-pedido',
  templateUrl: './tela-add-pedido.component.html',
  styleUrl: './tela-add-pedido.component.scss',
})
export class TelaAddPedidoComponent implements OnInit {
  listClientes: Cliente[] = [];
  listProdutos: Produto[] = [];

  pedidoForm!: FormGroup;

  constructor(
    private clienteService: ClientesService,
    private produtoService: ProdutosService,
    private pedidoService: NotafiscalService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.pedidoForm = fb.group({
      idCliente: ['', Validators.required],
      idProduto: ['', Validators.required],
      quantidade: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.carregarCliente();
    this.carregarProdutos();
  }

  carregarCliente(): void {
    this.clienteService.getClientes().subscribe((data: Cliente[]) => {
      this.listClientes = data;
    });
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe((data: Produto[]) => {
      this.listProdutos = data;
    });
  }

  adicionarPedido() {
    if (this.pedidoForm.valid) {
      const pedidoFeito: NotaFiscal = {
        id: 0,
        idUsuario: this.pedidoForm.value.idCliente,
        idProduto: this.pedidoForm.value.idProduto,
        quantidade: this.pedidoForm.value.quantidade,
        dataEmissao: new Date(),
        valorTotal: 0, // Sera calculado no backend
      };

      this.pedidoService.addPedido(pedidoFeito).subscribe(() => {
        this.snackbar.open('Pedido realizado com sucesso!', 'Fechar', {
          duration: 4000,
        });

        this.pedidoForm.reset();
      });
    } else {
      this.snackbar.open('Formulário inválido!', 'Fechar', {
        duration: 3000,
      });
    }
  }
}
