import React from "react";
import person from "../../../assets/images/about_us/person.jpg" 
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
        <img src={person} className="max-w-sm h-full  rounded-lg shadow-4xl" alt="" />
        <img src={parts} className="absolute w-3/5  right-10 top-1/2 rounded-lg shadow-2xl border-4" alt="" />
        </div>
        <div className="w-1/2 ml-5">
          <p className="text-2xl font-bold text-orange-500 ">About Us</p>
          <h1 className="text-4xl font-bold my-5">We have legendary expert<br />for car servicing !</h1>
          <p className="py-4 font-bold text-lg my-5">
          Car servicing is essential for safety, reliability, and longevity. Regular maintenance prevents breakdowns, improves fuel efficiency, and preserves resale value. Don't neglect it—prioritize servicing for a smoother, safer, and more economical journey. Thank you."
          </p>
          <button className="btn btn-primary">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
