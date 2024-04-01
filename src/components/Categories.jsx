import React, { useEffect, useState } from "react";
import productService from "../data/ProductService";
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setCat } from "../store/categorySlice";

function Categories() {
  const [category, setCategory] = useState([]);
  const cat = useSelector((state) => state.category);
  const dispatch = useDispatch();

  //   console.log(category);

  useEffect(() => {
    async function fnc() {
      const category = await productService.getAllProductsCat();
      setCategory(category);
    }

    fnc();
  }, []);

  const categoryHandler = (value) => {
    dispatch(setCat(value));
  };

  return (
    <ul className="flex flex-wrap mt-32 gap-2 justify-center">
      {category?.map((item, index) => (
        <li key={index}>
          <Button
            variant="text"
            onClick={() => categoryHandler(item)}
            className={`active:${item === cat}`}
          >
            {item}
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
