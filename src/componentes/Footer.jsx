import { Link } from 'react-router-dom'
import './Footer.css'
import Logo from "../assets/logoo.png"

const Footer = () => {
  return (
    <footer className="footer">
     <img src={Logo} alt="logo lis & lirios"  className="logo__footer"/>

    <div className="help">
     <h3>NAVEGAÇÃO</h3>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/produtos'>Produtos</Link></li>
        <li><Link to='/sobre'>Sobre</Link></li>
      </ul>
    </div>

        <div className="help">
            <h3>AJUDA</h3>
            <ul>
                <li><a href="#">Dúvidas frequentes</a></li>
                <li><a href="#">Política de entrega</a></li>
                <li><a href="#">Trocas e devoluções</a></li>
            </ul>
        </div>

        <div className="social-Medias__Icons">
            <h3>SIGA-NOS</h3>
            <ul>
                <li><i className="fa-brands fa-instagram"></i></li>
                
                <li><i className="fa-brands fa-whatsapp"></i></li>
            </ul>
        </div>

        <p> &copy; 2026 Floricultura Lis & Lirios. Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer