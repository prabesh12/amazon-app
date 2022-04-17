import React from "react";
import Rating from "../components/Rating";
import data from "../datalist";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const {id} = useParams();
  const product = data.product.find((x) => x._id === id);
  if (!product) {
    return <div>Product not found</div>;
  }
  return  (
    <>
    <Link to="/">Back to Home</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>price : ${product.price}</li>
            <li>
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">{product.countInStock} item in stock </span>
                    ) : (
                      <span className="danger"> Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block"> Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
