import React from "react";
import productService from "../data/ProductService";
import { useState } from "react";
import { useEffect } from "react";
import { ProductCard } from ".";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

function Products() {
  const [product, setProduct] = useState("");

  const [catProduct, setCatProduct] = useState("");

  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fnc() {
      const products = await productService.getAllProducts();
      setProduct(products);
    }
    fnc();
  }, []);

  useEffect(() => {
    async function categoryHandler() {
      const cateProduct = await productService.getProductsByCategories(
        category
      );
      setCatProduct(cateProduct);
    }
    categoryHandler();
  }, [category]);

  const cartItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <ul className="flex flex-row flex-wrap mt-10 justify-evenly">
      {!catProduct
        ? product.products?.map((item) => (
            <li key={item.id} className="flex flex-wrap">
              <ProductCard
                key={item.title}
                productImage={item.thumbnail}
                productTitle={item.title}
                productPrice={item.price}
                productCategory={item.category}
                productDescription={item.description}
                addToCart={() => cartItem(item)}
              />
            </li>
          ))
        : catProduct.products?.map((item) => (
            <li key={item.id} className="flex flex-wrap">
              <ProductCard
                key={item.title}
                productImage={item.thumbnail}
                productTitle={item.title}
                productPrice={item.price}
                productCategory={item.category}
                productDescription={item.description}
                addToCart={() => cartItem(item)}
              />
            </li>
          ))}
    </ul>
  );
}

export default Products;
