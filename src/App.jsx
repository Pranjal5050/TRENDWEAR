//import React from 'react'
//import Navbaar from './components/Navbaar'
//import Hero from './components/Hero'
//import Products from './components/Products'
//import Slider from './components/Slider'
//import TrendingProduct from './components/CustomerSupport'
//import Sale from './components/Contact'
//import Footer from './components/Footer'
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
//const App = () => {
//  return (
//    <div className='overflow-x-hidden'>
//      <Navbaar/>
//      <Hero/>
//      <Products />
//      <Slider/>
//      <TrendingProduct/>
//      <Sale/>
//      <Footer/>
//    </div>
//  )
//}
//
//export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbaar from './components/Navbaar';
import Hero from './components/Hero';
import Products from './components/Products';
import Slider from './components/Slider';
import TrendingProduct from './components/CustomerSupport';
import Sale from './components/Contact';
import Footer from './components/Footer';
import Womens from './components/Womens';
import ProductDetailsWomens from './components/ProductDetailsWomens';
import ProductDetailsMens from './components/ProductDetailsMens';
import MensCollection from './components/MensCollection';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar always visible */}
        <Navbaar />

        {/* Main content changes based on route */}
        <div className="flex-grow overflow-x-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Products />
                  <Slider />
                  <TrendingProduct />
                  <Sale />
                </>
              }
            />

            {/* Womens page */}
            <Route path="/Womens" element={<Womens />} />
            <Route path='/mens' element={<MensCollection/>}/>
            <Route path="/product/:id" element={<ProductDetailsWomens />} />
            <Route path="/productmen/:id" element={<ProductDetailsMens/>} />

          </Routes>
        </div>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
