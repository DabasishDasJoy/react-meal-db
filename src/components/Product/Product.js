import React from "react";
import "./Product.css";
const Product = ({
  product,
  product: { strMealThumb: img, strMeal: meal },
  handleOrder,
}) => {
  return (
    <div className="product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{meal}</h4>
      </div>
      <div className="btn-container">
        <button onClick={() => handleOrder(product)} className="btn-order">
          Order
        </button>
      </div>
    </div>
  );
};

export default Product;
