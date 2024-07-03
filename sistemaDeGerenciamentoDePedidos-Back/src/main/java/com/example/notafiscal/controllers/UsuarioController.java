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
import com.example.notafiscal.entities.Usuario;
import com.example.notafiscal.services.UsuarioService;

@RestController
@RequestMapping(value = "/api/cliente")
public class UsuarioController {
	
	@Autowired
	private UsuarioService service;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> getAll(){
		List<Usuario> usuarioList = service.getAll();
		return ResponseEntity.ok().body(usuarioList);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Usuario> getById(@PathVariable Long id){
		Usuario usuarioId = service.gelById(id);
		return ResponseEntity.ok().body(usuarioId);
	}
	
	@PostMapping
	public ResponseEntity<Usuario> save(@RequestBody Usuario usuario){
		usuario = service.save(usuario);
		return ResponseEntity.ok().body(usuario);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Long id){
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	

}
