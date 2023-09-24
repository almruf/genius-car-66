import React from 'react';
import { FaStar } from 'react-icons/fa';
const ProductsCard = ({product}) => {
  const {id,img,title,price} = product;
    return (
      <div id={id} className=" card card-compact w-96  bg-base-100 shadow-2xl border-4 my-4">
      <figure>
        <img className='h-80'  src={img} alt="servicing" />
      </figure>
      <div className="card-body">
        <p className='flex'><FaStar/><FaStar/></p>
        <p className=' text-lg font-bold text-left'>{title}</p>
        <h1 className="text-xl font-bold text-orange-500 text-start">
          BDT:{price} Tk
        </h1>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">collect</button>
        </div>
      </div>
    </div>
    );
};

export default ProductsCard;
