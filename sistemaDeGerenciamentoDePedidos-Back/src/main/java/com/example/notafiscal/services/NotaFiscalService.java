package com.example.notafiscal.services;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.notafiscal.entities.NotaFiscal;
import com.example.notafiscal.entities.Produto;
import com.example.notafiscal.entities.Usuario;
import com.example.notafiscal.repositories.NotaFiscalRepository;
import com.example.notafiscal.repositories.ProdutoRepository;
import com.example.notafiscal.repositories.UsuarioRepository;

import jakarta.transaction.Transactional;

@Service
public class NotaFiscalService {
	
	@Autowired
	private NotaFiscalRepository repNota;
	
	@Autowired
	private ProdutoRepository repProduto;
	
	@Autowired
	private UsuarioRepository repUsuario;
	
	public List<NotaFiscal> getAll(){
		return repNota.findAll();
	}
	
	public NotaFiscal gelById(Long id) {
		Optional<NotaFiscal> notaFiscal  = repNota.findById(id);
		return notaFiscal.orElseThrow();
	}
	
	@Transactional
	public NotaFiscal emitirNotaFiscal(NotaFiscal nota) {
		
		// Obtenha o Produto
		Produto produto = repProduto.findById(nota.getIdProduto()).orElseThrow();
		
		// Obtenha o Cliente
		//Usuario cliente = repUsuario.findById(nota.getIdUsuario()).orElseThrow(() -> new NoSuchElementException("Usuário não encontrado"));
		
		// Verifique o estoque
		if(nota.getQuantidade() > produto.getEstoque()) {
			throw new NoSuchElementException();			
		}
		
		// Calcule o valor total
		Double valorTotal = produto.getPreco() * nota.getQuantidade();
		nota.setValorTotal(valorTotal);
		
		// Atualize o estoque
		int estoqueFinal = produto.getEstoque() - nota.getQuantidade();
		produto.setEstoque(estoqueFinal);
		repProduto.save(produto);
		
		 // Registre a nota fiscal
		nota.setDataEmissao(LocalDate.now());
		
		return repNota.save(nota);	
	}
	
	public void delete(Long id) {
		repNota.deleteById(id);		
	}

}
