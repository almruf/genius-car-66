import React, { useEffect, useState } from "react";

const OrderRow = ({ order , handleDelete}) => {
  const { _id, serviceName, price, phone, customer, service } = order;
  // console.log(service);
  const [orderService, setOrderService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrderService(data);
      });
  }, [service]);
   

  
  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
          X
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex gap-4">
          <div className="avatar">
            <div className="mask rounded w-28 h-20">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            {serviceName}
            <br />
            <span className="badge badge-ghost badge-sm">${price}</span>
          </div>
        </div>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default OrderRow;
