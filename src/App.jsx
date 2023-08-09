import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/home/Home'
import About from './views/about/About'
import './App.css'
import Nav from './components/nav/Nav'

function App() {

  const [products, setProducts] = useState([])
  const API = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setProducts(data) )
  }, [])

  return (
    <main>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home products={products}/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </main>
  )
}

export default App
