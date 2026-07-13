import { HashRouter, Routes, Route } from 'react-router-dom'

import {CartProvider} from "./componentes/CartContext"
import Sobre         from "./pages/Sobre.jsx"
import Produtos      from "./pages/Produtos.jsx"
import Home          from "./pages/Home"

import Navbar        from "./componentes/NavBar"
import Footer        from "./componentes/Footer"

import './App.css'

function App() {
  return (
    <HashRouter>
      <CartProvider>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/produtos' element={<Produtos/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
          </Routes>
        <Footer/>
      </CartProvider>
    </HashRouter>
  )
}

export default App
