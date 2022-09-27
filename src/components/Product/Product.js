import React from "react";
import "./Product.css";
const Product = ({ product: { strMealThumb: img, strMeal: meal } }) => {
  return (
    <div className="product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{meal}</h4>
      </div>
      <div className="btn-container">
        <button className="btn-order">Order</button>
      </div>
    </div>
  );
};

export default Product;
