import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientesService } from '../../core/services/clientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../../core/models/Cliente';

@Component({
  selector: 'app-tela-add-cliente',
  templateUrl: './tela-add-cliente.component.html',
  styleUrl: './tela-add-cliente.component.scss',
})
export class TelaAddClienteComponent implements OnInit {
  clienteForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TelaAddClienteComponent>,
    private serviceCliente: ClientesService,
    private snackbar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  adicionarCliente() {
    if (this.clienteForm.valid) {
      const clienteNovo: Cliente = {
        ...this.clienteForm.value,
      };

      this.serviceCliente.addCliente(clienteNovo).subscribe(() => {
        this.snackbar.open('Cliente adicionado com sucesso!', 'Fechar', {
          duration: 3000,
        });
        this.dialogRef.close(true);
      });
    }
  }
}
