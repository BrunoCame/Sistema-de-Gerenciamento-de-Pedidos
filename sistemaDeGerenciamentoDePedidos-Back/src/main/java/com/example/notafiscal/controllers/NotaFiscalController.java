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

import com.example.notafiscal.entities.NotaFiscal;
import com.example.notafiscal.services.NotaFiscalService;

@RestController
@RequestMapping(value = "/api/notafiscal")
public class NotaFiscalController {
	
	@Autowired
	private NotaFiscalService service;
	
	@GetMapping
	public ResponseEntity<List<NotaFiscal>> getAll(){
		List<NotaFiscal> notaList = service.getAll();	
		return ResponseEntity.ok().body(notaList);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<NotaFiscal> getById(@PathVariable Long id){
		NotaFiscal notaId = service.gelById(id);
		return ResponseEntity.ok().body(notaId);
	}
	
	@PostMapping
	public ResponseEntity<NotaFiscal> addNotaFiscal(@RequestBody NotaFiscal notaFiscal){
		notaFiscal = service.emitirNotaFiscal(notaFiscal);
		return ResponseEntity.ok().body(notaFiscal);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteNota(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
