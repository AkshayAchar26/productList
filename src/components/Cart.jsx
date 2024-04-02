import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <div className="flex items-center space-x-4">
        <img
          src={item.thumbnail}
          alt={item.thumbnail}
          className="w-20 h-20 object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-500">Price: ${item.price}</p>
          <div className="flex items-center mt-2">
            <button
              className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
              onClick={handleDecrease}
            >
              -
            </button>
            <p className="px-4">{item.quantity}</p>
            <button
              className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <p className="font-semibold">${item.productPrice * item.quantity}</p>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="max-w-lg mx-auto mt-8">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;