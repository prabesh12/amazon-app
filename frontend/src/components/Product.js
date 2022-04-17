import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  const { products } = props;
  return (
    <div key={products._id} className="card">
      <Link to={`/product/${products._id}`}>
        {/* <!-- image size: 680px x 830px --> */}
        <img className="medium" src={products.image} alt="product" />
        </Link>
      <div className="card-body">
        <Link to={`/product/${products._id}`}>
          <h2>{products.name}</h2>
        </Link>
        <Rating
          rating={products.rating}
          numReviews={products.numReviews}
        ></Rating>
        <div className="price">{products.price}</div>
      </div>
      
    </div>
  );
};

export default Product;
