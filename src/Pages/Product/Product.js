import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Product = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
    fetch('product.json')
    .then(res=>res.json())
    .then(data=> setProducts(data))
  }, []);
  return (
    <div className="text-center">
      <div className="">
        <p className="text-2xl font-bold text-orange-500">Products</p>
        <h1 className="text-4xl font-bold "> Best quality product</h1>
        <p className="text-xl font-semibold my-2">
          We have collected parts from world renowned companies for your car
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-6">
                {
                    products.map(product=><ProductsCard
                    key={product._id}
                    product= {product}
                    ></ProductsCard> )
                }
      </div>
      
    </div>
  );
};

export default Product;
