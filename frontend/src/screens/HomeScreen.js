import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../action/ProductAction";
const HomeScreen = () => {
  // const [product, setProduct] = useState([])
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState()
  const dispatch = useDispatch();
 const productList = useSelector((state)=>state.productList)
 const {loading, error, products} = productList;

  useEffect(() => {
    
    dispatch(listProducts())
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.get("/api/products");
    //     setLoading(false);
    //     setProducts(data);
    //   } catch (error) {
    //     setError(error.message);
    //     setLoading(false);
    //   }
    // };
    // fetchData();


  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => {
            return <Product key={product._id} products={product}></Product>;
          })}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
