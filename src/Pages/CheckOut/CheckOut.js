import React, { useContext } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id, title, price} = useLoaderData()
    const {user} = useContext(AuthContext)

    const handlePlaceOrder = event =>{
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'unregistered'; 
    const phone = form.phone.value;
    const message = form.message.value;
    
    const order = {
        service: _id,
        serviceName : title,
        email,
        price,
        customer: name,
        phone,
        message
    }
    console.log(order)
    // if(phone.length !== 10 ){
    //     alert('phone number must be 11 digit')
    // }
    // else{
    
    // }

    fetch(`http://localhost:5000/orders`,{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('Order placed successfully')
            form.reset();
        }
    })
    .catch(err => console.error(err))
}
    


    return (
        <div className='my-20'>
            <form onSubmit={handlePlaceOrder}>
                    <h2 className="text-xl ml-40  font-semibold">{title}</h2>
                    <h2 className="text-lg ml-40 text-orange-400 font-bold">{price}</h2>
                
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 w-3/4 my-5 mx-auto">
                    <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full " required/>
                    <input name='lastName' type="text" placeholder="Last name" className="input input-bordered w-full "  required/>
                    <input name='phone' type="phone" placeholder="Phone" className="input input-bordered "  required/>
                    <input name='email' type="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered " readOnly required/>   
                </div>
                <div className=" grid grid-cols-1 w-3/4 my-5 mx-auto"> 
                    <textarea name='message' type="message" className="textarea textarea-bordered w-full" placeholder="Write your requirement" ></textarea>
                </div>  
                    <input className='btn btn-outline ml-40 mt-5' type='submit' value='Book now'/>
            </form>
        </div>
    );
};

export default CheckOut;