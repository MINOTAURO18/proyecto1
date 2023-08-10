import styles from "../card/card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ products }) => {
  return (
    <div className={styles.cards}>
      {products.allProducts?.map((product) => {
        return (
          <div className={styles.card} key={product.title}>
            <div className={styles.img}>
              <img src={product.image} alt="" />
            </div>
            <h1>{product.title}</h1>
            <div>
              <NavLink to={`/details/${product.id}`}>
              <button>More</button>
              </NavLink>
              <button>Buy</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
