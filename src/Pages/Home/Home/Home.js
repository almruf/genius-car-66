import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../../Services/Services';
import Product from '../../Product/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Product></Product>
        </div>
    );
};

export default Home;