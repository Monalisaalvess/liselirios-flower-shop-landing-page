import { useState, useRef, useEffect } from 'react'
import            { Link }             from 'react-router-dom'

import { useCart }  from './CartContext'
import CarProdutos  from './CartProdutos'

import "./NavBar.css";

import Logo from "../assets/logoo.png";

export default function NavBar() {
  const { totalItens } = useCart()
  const [aberto, setAberto] = useState(false)
  const ref = useRef(null)

    useEffect(() => {
      function handler(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setAberto(false)
      }}
      document.addEventListener("mousedown", handler)
      return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
   <nav className='Navbar'>
      <Link to="/">    <img src={Logo} alt="Lis & Lirios Floricultura" className='logo'/> </Link>
        <div className='nav-options'>
          <ul className="nav-links">
              <li> <Link to='/'> Home           </Link> </li>
              <li><Link to='/produtos'>Produtos </Link> </li>
              <li> <Link to='/sobre'>Sobre      </Link> </li>

              <li className='nav-cart-wrap' ref={ref}>
               <button className="cart-btn" aria-label="Carrinho" onClick = { () => setAberto (v => !v)}>
                <i className="fa-solid fa-bag-shopping"/>
                {totalItens > 0 && (<span className='cart-btn-badge'>{totalItens}</span>)}
               </button>
                {aberto && <CarProdutos fechar={ () => setAberto(false)}/>}
              </li>
          </ul>
        </div> 
   </nav>
  )
}
