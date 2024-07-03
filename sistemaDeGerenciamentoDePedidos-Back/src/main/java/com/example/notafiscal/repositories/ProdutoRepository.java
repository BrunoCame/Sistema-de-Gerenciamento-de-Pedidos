package com.example.notafiscal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.notafiscal.entities.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
