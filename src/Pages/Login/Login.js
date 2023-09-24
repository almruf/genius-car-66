import React, { useContext } from "react";
import img1 from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";


const Login = () => {
  const {signIn} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password= form.password.value;
        signIn( email, password)
        .then(result=>{
          const user = result.user;
           console.log(user)
        })
        .catch(err=>console.error(err))
    }
  return (
    <div className="hero w-full my-10">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className=" lg:text-left">
            <img className="w-3/5" src={img1} alt="" />
        </div>
        <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="text" placeholder="email" name="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text ">Password</span> </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required/>
              <label className="label"> <Link to='/signup' className="label-text-alt link link-hover">Forgot password?</Link></label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="login" />
            </div>
          </div>
          <p className="ml-10 my-4">create a new account <Link to='/signup' className="text-lg text-orange-400 ml-2">signUp</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;


