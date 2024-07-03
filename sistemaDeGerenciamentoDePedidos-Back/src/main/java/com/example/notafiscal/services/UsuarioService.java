package com.example.notafiscal.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.notafiscal.entities.Usuario;
import com.example.notafiscal.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository rep;
	
	public List<Usuario> getAll(){
		return rep.findAll();	
	}
	
	public Usuario gelById(Long id) {
		Optional<Usuario> usuario  = rep.findById(id);
		return usuario.orElseThrow();
	}
	
	public Usuario save(Usuario obj) {
		return rep.save(obj);
	}
	
	public void deleteById(Long id) {
		rep.deleteById(id);
	}

}
