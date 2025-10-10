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
import ProductDetailsCosmetics from './components/ProductDetailsCosmetics';
import ProductDetailsAccessories from './components/ProductDetailsAccessories';
import MensCollection from './components/MensCollection';
import KidsCollection from './components/KidsCollection';
import CosmeticsCollection from './components/CosmeticsCollection'
import AccessoriesCollection from './components/AccessoriesCollection'
import Cart from './components/Cart'

import ProductDetailsKids from './components/ProductDetailsKids';

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
            <Route path="/cart" element={<Cart/>} />
            <Route path="/Womens" element={<Womens />} />
            <Route path='/mens' element={<MensCollection/>}/>
            <Route path='/kids' element={<KidsCollection/>}/>
            <Route path='/cosmetics' element={<CosmeticsCollection/>}/>
            <Route path='/accessories' element={<AccessoriesCollection/>}/>
            <Route path="/product/:id" element={<ProductDetailsWomens />} />
            <Route path="/productmen/:id" element={<ProductDetailsMens/>} />
            <Route path="/productkids/:id" element={<ProductDetailsKids/>} />
            <Route path="/productcosmetics/:id" element={<ProductDetailsCosmetics/>} />
            <Route path="/productaccessories/:id" element={<ProductDetailsAccessories/>} />



          </Routes>
        </div>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
