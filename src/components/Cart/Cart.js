import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h4>Selected Products</h4>
      <ol>
        {cart.map((cartItem) => (
          <li>{cartItem.strMeal}</li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;
