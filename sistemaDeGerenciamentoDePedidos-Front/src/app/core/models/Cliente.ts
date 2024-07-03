import { NotaFiscal } from './NotaFiscal';

export class Cliente {
  idUsuario!: number;
  nome?: string;
  email?: string;
  cpf?: string;
  pedidos?: NotaFiscal[];
}
