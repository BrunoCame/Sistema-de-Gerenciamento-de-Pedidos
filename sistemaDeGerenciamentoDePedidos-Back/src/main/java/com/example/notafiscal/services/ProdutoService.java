package com.example.notafiscal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.notafiscal.entities.Produto;
import com.example.notafiscal.repositories.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository rep;
	
	public List<Produto> getAll(){
		return rep.findAll();	
	}
	
	public Produto gelById(Long id) {
		Optional<Produto> produto  = rep.findById(id);
		return produto.orElseThrow();
	}
	
	public Produto save(Produto obj) {
		return rep.save(obj);
	}
	
	public void deleteById(Long id) {
		rep.deleteById(id);
	}

}
