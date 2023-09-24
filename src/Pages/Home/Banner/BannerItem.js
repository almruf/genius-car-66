import React from 'react';
import './BannerItem.css'
const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full my-4 ">
                   <div className="w-full banner-img-overlay ">
                   <img  src={image} className="w-full rounded-xl max-h-screen" alt=""/>
                   </div>
                  <div className="absolute flex justify transform -translate-y-1/2  left-10 top-40">
                     <h1 className='text-6xl font-semibold text-white ml-10'>
                      The Legend<br />for car servicing
                     </h1>  
                     
                  </div>
                  <div className="absolute flex justify transform -translate-y-1/2  left-20 top-1/2">
                     <h1 className='text-lg font-semibold text-white'>
                      Revive Your Ride: Exceptional Car Servicing Done Right! <br />
                      Drive with Confidence: Your Trusted Car Servicing Partner
                     </h1>
                  </div>
                  <div className="absolute flex justify transform -translate-y-1/2  left-20 top-3/4">
                  <button className="btn btn-warning mr-5">read more</button>
                  <button className="btn btn-outline btn-warning">latest project</button>
                  </div>

                  <div className="absolute flex justify-end transform -translate-y-1/2  right-10 bottom-20">
                    <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
                    <a href={`#slide${next}`} className="btn btn-circle ml-4">❯</a>
                  </div>
                </div> 
    );
};

export default BannerItem;