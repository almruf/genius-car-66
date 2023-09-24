import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {
    const { _id ,img, title, description, price } = service;
    return (
      <div className=" card card-compact w-96 bg-base-100 shadow-2xl border-4 m-4">
        <figure>
          <img
            src={img}
            alt="servicing"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{title}</h2>
          <h1 className="text-xl font-bold text-orange-500 text-start">BDT : {price} </h1>
          <div className="card-actions justify-end">
            <Link to={`/CheckOut/${_id}`}>
            <button className="btn btn-primary">Appointment</button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default ServicesCard;
