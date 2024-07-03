import { Component, OnInit } from '@angular/core';
import { Produto } from '../../core/models/Produto';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdutosService } from '../../core/services/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-add-produto',
  templateUrl: './tela-add-produto.component.html',
  styleUrl: './tela-add-produto.component.scss',
})
export class TelaAddProdutoComponent implements OnInit {
  produtoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TelaAddProdutoComponent>,
    private produtoService: ProdutosService,
    private snackbar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.produtoForm = this.fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: [''],
      estoque: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  adicionarProduto() {
    if (this.produtoForm.valid) {
      const novoProduto: Produto = {
        ...this.produtoForm.value,
      };

      this.produtoService.addProduto(novoProduto).subscribe(() => {
        this.snackbar.open('Produto adicionado com sucesso!', 'Fechar', {
          duration: 3000,
        });
        this.dialogRef.close(true);
      });
    } else {
      console.log('DEU BOSTA');
    }
  }
}
