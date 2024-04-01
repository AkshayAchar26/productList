import React from "react";
import productService from "../data/ProductService";
import { useState } from "react";
import { useEffect } from "react";
import { ProductCard } from ".";
import { useSelector } from "react-redux";

function Products() {
  const [product, setProduct] = useState("");

  const [catProduct, setCatProduct] = useState("");

  const category = useSelector((state) => state.category);
  console.log(catProduct);

  useEffect(() => {
    async function fnc() {
      const products = await productService.getAllProducts();
      setProduct(products);
    }
    fnc();
  }, []);

  useEffect(() => {
    async function categoryHandler(category) {
      const cateProduct = await productService.getProductsByCategories(
        category
      );
      setCatProduct(cateProduct);
    }

    categoryHandler();
  }, [category]);

  return (
    <ul className="flex flex-row flex-wrap mt-10 justify-evenly">
      {
        product.products?.map((item) => (
          <li key={item.id} className="flex flex-wrap">
            <ProductCard
              key={item.title}
              productImage={item.thumbnail}
              productTitle={item.title}
              productPrice={item.price}
              productCategory={item.category}
              productDescription={item.description}
            />
          </li>
        ))}
      
    </ul>
  );
}

export default Products;
