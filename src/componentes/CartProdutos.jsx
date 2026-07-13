import { useNavigate } from "react-router-dom"
import { useCart } from "./CartContext"
import "./CartProdutos.css"

export default function CarProdutos({ fechar }) {
  const navigate = useNavigate()
  const { itens, removerItem, alterarQuantidade, totalPreco } = useCart()

  return (
    <div className="carrinho-dropdown">

      <div className="carrinho-dropdown-header">
        <h3>Meu Carrinho</h3>
        <button className="carrinho-dropdown-fechar" onClick={fechar}>✕</button>
      </div>

      {itens.length === 0 ? (

        <div className="carrinho-dropdown-vazio">
          <i className="fa-solid fa-clover"></i>
          <p>Seu carrinho está vazio</p>
        </div>

      ) : (
  <>
      <ul className="carrinho-dropdown-lista">
        {itens.map(item => (
        
        <li key={item.id} className="carrinho-item">
          <img src={item.imagem} alt={item.nome} className="carrinho-item__img" />
        
          <div className="carrinho-item__info">
            <p className="carrinho-item__nome">{item.nome}</p>
            <p className="carrinho-item__preco">
             R$ {(item.preco * item.quantidade).toFixed(2)}
            </p>
          
          <div className="carrinho-item__qtd">
            <button onClick={() => alterarQuantidade(item.id, -1)}>−</button>
            <span>{item.quantidade}</span>
            <button onClick={() => alterarQuantidade(item.id, +1)}>+</button>
          </div>
        </div>  
        <button  className="carrinho-item__remover" onClick={() => removerItem(item.id)}>✕</button>
        </li>
        ))}
      </ul>

        <div className="carrinho-dropdown__footer">
          <div className="carrinho-dropdown__total">
            <span>Total</span>
            <strong>R$ {totalPreco.toFixed(2)}</strong>
          </div>

          <button className="carrinho-dropdown__finalizar" onClick={() => { fechar(); navigate('/checkout') }}>
            Finalizar pedido
          </button>

          </div>
  </>
      )}
    </div>
  )
}