import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
<div id='home' className="w-full bg-[#FAFAFA]">
  <div className="mt-2 flex flex-col lg:flex-row gap-4">
    {/* Left big image */}
    <div className="w-full lg:w-[54vw] h-[165vw] lg:h-[55vw] relative">
      <img
        className="w-full h-full object-cover"
        src="https://preview.colorlib.com/theme/ashion/img/categories/category-1.jpg.webp"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col justify-center px-4 ml-10">
        <h1 className="font-bold text-4xl md:text-4xl">Women's fashion</h1>
        <p className="mt-4 mb-6 font-light text-gray-500 text-sm md:text-base">
          Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid- 
          unt labore edolore magna aliquapendisse ultrices gravida.
        </p>
        <Link to="/Womens" className=" text-start">SHOP NOW</Link>
        <hr className="w-20 border-[#CA1515] mt-2" />
      </div>
    </div>

    {/* Right side grid */}
    <div className="w-full lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Item 1 */}
      <div className="relative h-80 md:w-62 w-full">
        <img
          className="w-full h-full object-cover"
          src="https://preview.colorlib.com/theme/ashion/img/categories/category-2.jpg.webp"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col  justify-center ml-4">
          <h1 className="text-2xl md:text-2xl font-extrabold">
            Men's Fashion
          </h1>
          <p className="text-gray-400 mt-1 mb-2 text-sm md:text-base">358 items</p>
          <button className="font-medium text-start">Shop Now</button>
          <hr className="w-16 border-[#CA1515] mt-1" />
        </div>
      </div>

      {/* Item 2 */}
      <div className="relative h-80 md:w-62 w-full md:ml-15">
        <img
          className="w-full h-full object-cover"
          src="https://preview.colorlib.com/theme/ashion/img/categories/category-3.jpg.webp"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col justify-center ml-5">
          <h1 className="text-2xl md:text-2xl font-extrabold">
            Kid's Fashion
          </h1>
          <p className="text-gray-400 mt-1 mb-2 text-sm md:text-base">273 items</p>
          <button className="font-medium text-start">Shop Now</button>
          <hr className="w-16 border-[#CA1515] mt-1" />
        </div>
      </div>

      {/* Item 3 */}
      <div className="relative h-74 md:w-62 w-full">
        <img
          className="w-full h-full object-cover"
          src="https://preview.colorlib.com/theme/ashion/img/categories/category-4.jpg.webp"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col justify-center ml-5">
          <h1 className="text-2xl md:text-2xl font-extrabold">
            Cosmetics
          </h1>
          <p className="text-gray-400 mt-1 mb-2 text-sm md:text-base">159 items</p>
          <button className="font-medium text-start">Shop Now</button>
          <hr className="w-16 border-[#CA1515] mt-1" />
        </div>
      </div>

      {/* Item 4 */}
      <div className="relative h-74 md:w-62 w-full md:ml-15">
        <img
          className="w-full h-full object-cover"
          src="https://preview.colorlib.com/theme/ashion/img/categories/category-5.jpg.webp"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col justify-center ml-5">
          <h1 className="text-2xl md:text-2xl font-extrabold">
            Accessories
          </h1>
          <p className="text-gray-400 mt-1 mb-2 text-sm md:text-base">792 items</p>
          <button className="font-medium text-start">Shop Now</button>
          <hr className="w-16 border-[#CA1515] mt-1" />
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Hero
