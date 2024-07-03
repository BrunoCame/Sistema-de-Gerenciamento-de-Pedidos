import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TelaAddClienteComponent } from '../tela-add-cliente/tela-add-cliente.component';
import { Cliente } from '../../core/models/Cliente';
import { ClientesService } from '../../core/services/clientes.service';
import { DialogDeleteComponent } from '../../core/components/dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-tela-cliente',
  templateUrl: './tela-cliente.component.html',
  styleUrl: './tela-cliente.component.scss',
})
export class TelaClienteComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'actions'];

  clientes: Cliente[] = [];

  constructor(
    public dialog: MatDialog,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clientesService.getClientes().subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }

  formatCpf(cpf: string): string {
    if (!cpf) return cpf;

    const cleaned = cpf.replace(/\D/g, '');
    const formatado = cleaned.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );

    return formatado;
  }

  public deleteCategory(element: Cliente) {
    this.dialog
      .open(DialogDeleteComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.clientesService
            .deleteCliente(element.idUsuario)
            .subscribe(() => {
              this.carregarClientes();
            });
        }
      });
  }

  public createNewClient() {
    const dialogRef = this.dialog.open(TelaAddClienteComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.carregarClientes();
      }
    });
  }
}
