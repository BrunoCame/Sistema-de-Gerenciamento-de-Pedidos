package com.example.notafiscal.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_itempedido")
public class ItemPedido implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idItemPedido;
	
	@ManyToOne
	@JoinColumn(name = "pedido_id")
	private Pedido pedido;
	
	@ManyToOne
	@JoinColumn(name = "produto_id")
	private Produto produto;
	
	private Integer quantidade;
	
    private Double preco;
    
    public ItemPedido() {
    	
    }

	public ItemPedido(Long idItemPedido, Pedido pedido, Produto produto, Integer quantidade, Double preco) {
		this.idItemPedido = idItemPedido;
		this.pedido = pedido;
		this.produto = produto;
		this.quantidade = quantidade;
		this.preco = preco;
	}



	public Long getIdItemPedido() {
		return idItemPedido;
	}

	public void setIdItemPedido(Long idItemPedido) {
		this.idItemPedido = idItemPedido;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}
	
	public double getSubtotal() {
		return  preco * quantidade;	
	}
	
}
