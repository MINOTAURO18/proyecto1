import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Details from "./views/details/Details";
import About from "./views/about/About.jsx";
import Home from "./views/home/Home.jsx";
import Nav from "./components/nav/Nav.jsx";
import "./App.css";

function App() {
  const location = useLocation()
  const [products, setProducts] = useState({
    allProducts: [],
    allProducts2: [],
  });
  const API = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProducts({ allProducts: data, allProducts2: data }));
  }, []);
  
  return (
    <>
    {
      location.pathname === '/' ? <Nav style={{color: "white"}}/> : <Nav style={{color: "white"}}/>
    }
      {/* <Nav /> */}
      <Routes>
        <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="fade" timeout={200}>
                <Home products={products} setProducts={setProducts} />
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

        <Route
          path="/details/:id"
          element={
            <TransitionGroup>
              <CSSTransition key="about" classNames="fade" timeout={200}>
                <Details />
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>

    </>
  );
}

export default App;
