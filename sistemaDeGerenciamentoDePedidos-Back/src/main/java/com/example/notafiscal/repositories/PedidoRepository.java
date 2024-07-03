package com.example.notafiscal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.notafiscal.entities.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long>{

}
