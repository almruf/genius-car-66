import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrders(data);
      });
  }, [user?.email]);
  
  const handleDelete = id =>{
    console.log(id)
    const proceed = window.confirm('Are you sure, you want to cancel this order')
    if(proceed) {
      fetch(`http://localhost:5000/orders/${id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount > 0){
          alert('deleted successfully')
          const remainign =  orders.filter(odr => odr._id !== id)
          setOrders(remainign)
        }
      })
    }
  }

  return (
    <div className="overflow-x-auto my-10">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
           <p className="text-sm">Remove</p>
          </th>
          <th className="text-sm">Name</th>
          <th className="text-sm">Job</th>
          <th className="text-sm">Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map( order => <OrderRow
            key={order._id}
            order = {order}
            handleDelete= {handleDelete}
          ></OrderRow>)
        }
      </tbody>
    </table>
  </div>
  );
};

export default Orders;

