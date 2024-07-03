package com.example.notafiscal.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.notafiscal.entities.Pedido;
import com.example.notafiscal.repositories.PedidoRepository;

@Service
public class PedidoService {
	
	@Autowired
	private PedidoRepository rep;
	
	public List<Pedido> getAll(){
		return rep.findAll();	
	}
	
	public Pedido save(Pedido obj) {
		return rep.save(obj);
	}
	
	public void deleteById(Long id) {
		rep.deleteById(id);
	}

}
