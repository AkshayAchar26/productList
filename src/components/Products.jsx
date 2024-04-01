import React from "react";
import productService from "../data/ProductService";
import { useState } from "react";
import { useEffect } from "react";
import { ProductCard } from ".";

function Products() {
  const [product, setProduct] = useState("");
  console.log(product);
  useEffect(() => {
    async function fnc() {
      const products = await productService.getAllProducts();
      setProduct(products);
    }
    fnc();
  }, []);
  return (
    <ul className="max-w-screen-md py-12 flex items-center justify-evenly">
      {product.products?.map((item) => (
        <ProductCard
          key={item.title}
          productImage={item.thumbnail}
          productTitle={item.title}
          productPrice={item.price}
          productCategory={item.category}
          productDescription={item.description}
        />
      ))}
    </ul>
  );
}

export default Products;
