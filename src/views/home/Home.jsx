import Cards from "../../components/cards/Cards.jsx";
import styles from "../home/home.module.css";

const Home = ({ products, setProducts }) => {
  const handlerTecnology = () => {
    setProducts({
        ...products,
        allProducts: products.allProducts2.filter(product => product.category === "electronics")

       })
  };

  const handlerClothes = () => {
    
    setProducts({
        ...products,
        allProducts: products.allProducts2.filter(product => product.category === "women's clothing" || product.category === "men's clothing")
       })
  };

  const handlerJewelry = () => {
    setProducts({
        ...products,
        allProducts: products.allProducts2.filter(product => product.category === "jewelery")
       })
  };
  const handlerAll = () => {
    setProducts({
        ...products,
        allProducts: products.allProducts2.filter(product => product)
       })
  };
  return (
    <>
      <section className={styles.bg}></section>
      <div className={styles.btns}>
        <button onClick={handlerTecnology}>Tecnology</button>
        <button onClick={handlerClothes}>Clothes</button>
        <button onClick={handlerJewelry}>Jewelry</button>
        <button onClick={handlerAll}>All</button>
      </div>
      <Cards products={products} />
    </>
  );
};

export default Home;
