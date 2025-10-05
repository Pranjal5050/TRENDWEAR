import React from 'react'
import Navbaar from './components/Navbaar'
import Hero from './components/Hero'
import Products from './components/Products'
import Slider from './components/Slider'
import TrendingProduct from './components/CustomerSupport'
import Sale from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbaar/>
      <Hero/>
      <Products />
      <Slider/>
      <TrendingProduct/>
      <Sale/>
      <Footer/>
    </div>
  )
}

export default App
