import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setProducts(data);
    });
    return setProducts({});
  }, [id]);
  return (
    <div>
      <h3>{products.title}</h3>
      <h3>{products.price}</h3>
      <h3>{products.description}</h3>
      <h3>{products.category}</h3>
      <img src={products.image} alt={products.name} />
    </div>
  );
};

export default Details;
