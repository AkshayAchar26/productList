import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, removeQuantity } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addItem(item));
  };

  const handleDecrease = () => {
    dispatch(removeQuantity(item.id));
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
      <p className="font-semibold">${item.price * item.quantity}</p>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((total,item) => total + (item.quantity * item.price) ,0)

  return (
    <div className="max-w-lg mx-auto mt-8 flex-col ">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {cartItems.length > 0 && (
        <div className="flex w-full justify-between">
          <h2 className="font-semibold">Total</h2>
          <p className="font-semibold">${total}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
