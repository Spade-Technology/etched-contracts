// components/ProductList.jsx
import React, { useState, useEffect } from "react";
import { getStripe } from "@/utils/get-stripe";

const stripe = await getStripe();

const ProductList = () => {
  const [products, setProducts] = useState([]);
  if (!stripe) {
    return null;
  }
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await stripe.products.list();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price / 100}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
