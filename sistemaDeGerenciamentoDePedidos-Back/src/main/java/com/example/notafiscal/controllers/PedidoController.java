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
import com.example.notafiscal.entities.Pedido;
import com.example.notafiscal.services.PedidoService;

@RestController
@RequestMapping(value = "/api/pedido")
public class PedidoController {
	
	@Autowired
	private PedidoService service;
	
	@GetMapping
	public ResponseEntity<List<Pedido>> getAll(){
		List<Pedido> pedidoList = service.getAll();
		return ResponseEntity.ok().body(pedidoList);		
	}
	
	@PostMapping
	public ResponseEntity<Pedido> save(@RequestBody Pedido pedido){
		pedido = service.save(pedido);
		return ResponseEntity.ok().body(pedido);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Long id){
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}

}
