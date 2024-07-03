package com.example.notafiscal.config;

import java.time.Instant;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.example.notafiscal.entities.ItemPedido;
import com.example.notafiscal.entities.NotaFiscal;
import com.example.notafiscal.entities.Pedido;
import com.example.notafiscal.entities.Produto;
import com.example.notafiscal.entities.Usuario;
import com.example.notafiscal.repositories.ItemPedidoRepository;
import com.example.notafiscal.repositories.NotaFiscalRepository;
import com.example.notafiscal.repositories.PedidoRepository;
import com.example.notafiscal.repositories.ProdutoRepository;
import com.example.notafiscal.repositories.UsuarioRepository;

@Configuration
@Profile("test")
public class TesteConfig implements CommandLineRunner {
	
	@Autowired
	private ProdutoRepository produtoRep;
	
	@Autowired
	private UsuarioRepository usuarioResp;
	
	@Autowired
	private PedidoRepository pedidoResp;
	
	@Autowired
	private ItemPedidoRepository itemPedidoResp;
	
	@Autowired
	private NotaFiscalRepository notaResp;

	@Override
	public void run(String... args) throws Exception {
		
		Produto p02 = new Produto(null, "Monitor", 300.00, "", 15);
		Produto p05 = new Produto(null, "Fone de Ouvido", 90.00, "", 63);
		
		produtoRep.saveAll(Arrays.asList(p02, p05));
		
		Usuario us01 = new Usuario(null, "Bruno Cabral Medeiros", "brunocabral9@hotmail.com", "01825483207");
		Usuario us02 = new Usuario(null, "Yvan Reginaldo Medeiros", "yvanregis@hotmail.com", "63145789601");
		Usuario us03 = new Usuario(null, "Jéssica Karine Machado Araújo", "jesska@hotmail.com", "06457965231");
		
		usuarioResp.saveAll(Arrays.asList(us01, us02, us03));
		
		//NotaFiscal nf01 = new NotaFiscal(null, us01.getIdUsuario(), p02.getIdProduto(), 2);
		
		
		//Pedido pe01 = new Pedido(null, Instant.parse("2023-05-20T19:53:07Z"), us01);
		//Pedido pe02 = new Pedido(null, Instant.parse("2023-05-21T13:02:25Z"), us03);
		
		//pedidoResp.saveAll(Arrays.asList(pe01, pe02));
		
		//ItemPedido ip01 = new ItemPedido(null, pe01, p02, 1, p02.getPreco());
		//ItemPedido ip02 = new ItemPedido(null, pe02, p05, 1, p05.getPreco());
		//ItemPedido ip04 = new ItemPedido(null, pe01, p06, 2, p06.getPreco());
		
		//itemPedidoResp.saveAll(Arrays.asList(ip01, ip02, ip04));
		
	}

}
