import React from 'react'
import Product from "../components/Product";
import data from "../datalist";
const HomeScreen = () => {
  return (
    <div className="row center">
          {data.product.map((product) => {
              console.log(product);
         return   <Product key={product._id} products={product} ></Product>
          })}
        </div>
  )
}

export default HomeScreen