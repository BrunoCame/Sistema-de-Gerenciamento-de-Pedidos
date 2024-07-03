package com.example.notafiscal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.notafiscal.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}
