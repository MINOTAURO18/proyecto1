import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/home/Home'
import About from './views/about/About'
import Nav from './components/nav/Nav'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const API = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setProducts(data) )
  }, [])

  return (
    <>
      <Nav/>
      <Routes>
      <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="fade" timeout={200}>
                <Home products={products} />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/about"
          element={
            <TransitionGroup>
              <CSSTransition key="about" classNames="fade" timeout={200}>
                <About />
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>
    </>
  )
}

export default App
