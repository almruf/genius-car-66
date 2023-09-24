import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=> setServices(data))
  }, []);
  
  return (
    <div className="text-center">
      <div className="">
        <p className="text-2xl font-bold text-orange-500">services</p>
        <h1 className="text-4xl font-bold "> Our Services area</h1>
        <p className="text-xl font-semibold my-2">
          We have divided our services into different parts. You can take our
          service very easily.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 h-3/6">
        {
            services.map(service => <ServicesCard
            key={service._id}
            service={service}
            ></ServicesCard>)
        }
      </div>
    </div>
  );
};

export default Services;
