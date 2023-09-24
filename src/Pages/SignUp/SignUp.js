import React, { useContext } from "react";
import img1 from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password) 
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(err=> console.error(err))
      form.reset()
  };

  return (
    <div className="hero w-full my-10">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className=" lg:text-left">
          <img className="w-3/5" src={img1} alt="" />
        </div>
        <form
          onSubmit={handleSignIn}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl"
        >
          <div className="card-body">
            <h1 className="text-4xl text-center font-bold">SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full-Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="signUp" />
            </div>
          </div>
          <p className="ml-10 my-4">
            have an account
            <Link to="/login" className="text-lg text-orange-400 ml-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
