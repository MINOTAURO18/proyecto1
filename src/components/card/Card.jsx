import styles from "../card/card.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Card = ({ products }) => {
  const productsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.allProducts2.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = products.allProducts2.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };
  return (
    <div className={styles.cards}>
      {currentProducts?.map((product) => {
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

      <div className="pagination">
        <button onClick={previousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Card;
