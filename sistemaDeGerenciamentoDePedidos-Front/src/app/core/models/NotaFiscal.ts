import { Data } from '@angular/router';

export class NotaFiscal {
  id!: number;
  idUsuario!: number;
  idProduto!: number;
  quantidade!: number;
  dataEmissao!: Data;
  valorTotal!: number;
}
