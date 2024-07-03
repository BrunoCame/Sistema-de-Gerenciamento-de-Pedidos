package com.example.notafiscal.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.notafiscal.entities.Produto;
import com.example.notafiscal.entities.Usuario;
import com.example.notafiscal.services.ProdutoService;

@RestController
@RequestMapping(value = "/api/produto")
public class ProdutoController {
	
	@Autowired
	private ProdutoService service;
	
	@GetMapping
	public ResponseEntity<List<Produto>> getAll(){
		List<Produto>produtoList = service.getAll();
		return ResponseEntity.ok().body(produtoList);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Produto> getById(@PathVariable Long id){
		Produto produtoId = service.gelById(id);
		return ResponseEntity.ok().body(produtoId);
	}
	
	@PostMapping
	public ResponseEntity<Produto> save(@RequestBody Produto produto){
		produto = service.save(produto);
		return ResponseEntity.ok().body(produto);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Long id){
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}

}
