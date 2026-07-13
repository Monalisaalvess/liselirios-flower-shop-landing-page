import { Link }    from 'react-router-dom'

import bouquet from "../assets/bouquet.png"
import flower  from "../assets/flower.png"
import gift    from "../assets/gift.png"
import basket  from "../assets/basket.png"

import "./Home.css"

const Home = () => { 
  return (
    <>
    <div className="home">
     <div className="hero">
        <h1>Quando as palavras falham, os lírios florescem em sentimento</h1>
         <Link to='/produtos' className="btn">
            Comprar agora
         </Link> 
     </div>
    </div>

    <div className="parallax1">
     <div className="parallaxtxt">
        <h5>Flores frescas</h5>
         <h2>Beleza que vem da natureza</h2>
          <div className="container">
           <div className="linha"></div></div>
            <p>Selecionamos as melhores flores <br/> 
               para garantir frescor, qualidade e durabilidade</p>
     </div>
    </div>

    <div className="section_1">
        <h5>Para cada ocasião</h5>
         <h2>Do simples ao inesquecível</h2>
          <div className="container">
           <div className="linha"></div></div>
            <p>Aniversários, celebrações, agradecimentos ou apenas porque sim. <br/>
               Flores tornam tudo especial</p>

     <div className="opcIcons">
      <div className="itemIcon">
        <img src={bouquet} alt="buque de flor" className="iconsFlower"/>
         <Link to='/produtos?categoria=buques'>
            Buquês
         </Link>
      </div>
      <div className="itemIcon">
        <img src={flower} alt="icone de arranjo de flores" className="iconsFlower"/>
         <Link to='/produtos?categoria=arranjos'>
            Arranjos
         </Link>
      </div>
      <div className="itemIcon">
        <img src={basket} alt="icone de cesta de flores" className="iconsFlower"/>
         <Link to='/produtos?categoria=cestas'>
            Cestas
         </Link>
      </div>
      <div className="itemIcon">
        <img src={gift} alt="icone de presente" className="iconsFlower"/>
         <Link to='/produtos?categoria=presentes'>
            Presentes
         </Link>
      </div>
     </div>
    </div>

    <div className="parallax2">
     <div className="conteudo">
        <h5>Feito à mão</h5>
         <h2>Detalhes que fazem a diferença</h2>
          <div className="container"><div className="linha"></div></div>
           <p>Cada arranjo é preparado por nossos <br/> 
              floristas com atenção e paixão em cada detalhe.</p>
     </div>
    </div>

    <div className="section_2">
        <h5>Nossa missão</h5>
         <h2>Levar sentimentos através das flores</h2>
          <div className="container"><div className="linha"></div></div>
           <p>Mais do que vender flores, queremos conectar <br/> pessoas e espalhar amor por onde formos. </p>
    </div>
</>
  )
}

export default Home