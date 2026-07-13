import { useRef } from "react"
import { useCart } from "../componentes/CartContext.jsx"
import produtos   from "../data/produtos.js"

import "./Produtos.css"

export default function Produtos() {
    const { adicionarItem } = useCart()
     const sliderRef = useRef(null)

      function scrollEsquerda() {
       const larguraCard = sliderRef.current.firstElementChild?.offsetWidth || 320
        sliderRef.current.scrollBy({ left: -larguraCard, behavior: "smooth" })
}
      function scrollDireita() {
       const larguraCard = sliderRef.current.firstElementChild?.offsetWidth || 320
        sliderRef.current.scrollBy({ left: larguraCard, behavior: "smooth" })
}

  return (

  <section className="produtos" id="produtos">
      <div className="produtos-header">
        <h5>PARA CADA OCASIÃO</h5>
        <h2 className="produtos-titulo">Nossos Produtos</h2>
        
      <div className="divider divider-center" />
        <p className="produtos-txt">Escolha o arranjo perfeito para o momento especial.</p>
      </div>

      <div className="produtos-slider-wrapper">
        <button className="produtos__arrow produtos__arrow--left" onClick={scrollEsquerda} aria-label="Rolar para a esquerda">
            ‹
        </button>

      <div className="produtos-slider" ref={sliderRef}> 
        {produtos.length === 0 ? (
          <p className="produtos-vazio">Nenhum produto disponível no momento.</p>
          ) : (
          produtos.map(produto => (
  <article key={produto.id} className="produto-card">

      <div className="produto-card__img-wrap">
        <img  src={produto.imagem}  alt={produto.nome}  className="produto-card__img"/>
          <span className="produto-card__categoria">{produto.categoria}</span>
      </div>

      <div className="produto-card__body">
        <h3 className="produto-card__nome">{produto.nome}</h3>
          <p className="produto-card__desc">{produto.descricao}</p>
                  
      <div className="produto-card__footer">
        <span className="produto-card__preco"> R$ {produto.preco.toFixed(2)} </span>
          <button className="produto-card__btn"  onClick={() => adicionarItem(produto)}>
              Comprar
          </button>
      </div>
      </div>
  </article>
)))}
    </div>
      <button className="produtos__arrow produtos__arrow--right" onClick={scrollDireita} aria-label="Rolar para a direita">
          ›
      </button>
    
    </div>
  </section>

  )
}