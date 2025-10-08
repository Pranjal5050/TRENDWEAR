import React from "react";
import { Link } from "react-router-dom";

// Men's products
const mensProducts = [
  {
    id: 1,
    name: "Men's T-Shirt",
    price: 499,
    originalPrice: 999,
    discount: 50,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/b/g/-original-imahf6tc2gxegcht.jpeg?q=70",
  },
  {
    id: 2,
    name: "Trendy Men's Style",
    price: 799,
    originalPrice: 1499,
    discount: 46,
    image:
      "https://rukminim2.flixcart.com/image/612/612/kokdci80/t-shirt/n/p/0/s-12504484-roadster-original-imag2znyunaw7pzb.jpeg?q=70",
  },
  {
    id: 3,
    name: "Men's Sweatshirt",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/7/f/m-men-printed-round-neck-polyester-black-and-white-t-shirt-combo-original-imahegr8hngmg6yz.jpeg?q=70",
  },
  {
    id: 4,
    name: "Men's Brown Shoes",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/y/l/n/xl-ts36-vebnor-original-imahfykf8czxebrp.jpeg?q=70",
  },
];

// Women's products (same IDs as used in ProductDetails.jsx)
const womensProducts = [
  {
    id: 1,
    name: "Women Embroidered Pure Cotton Straight Kurta (Blue)",
    price: 499,
    originalPrice: 999,
    discount: 50,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/e/e/e/l-sk-023-green-khadi-kurta-deepyog-original-imah2mv8w4uxzchs.jpeg?q=70",
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/i/r/v/xl-hek606-dressar-original-imahfv42kzjtgrjs.jpeg?q=70",
  },
  {
    id: 3,
    name: "Women A-line Maroon Maxi Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/i/r/3xl-butti-maroon-kamex-original-imahfxcjsmhvcqgs.jpeg?q=70",
  },
  {
    id: 4,
    name: "Women A-line Red Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/r/v/m-b133-pratha-red-youthnic-original-imah925pvvczwdgt.jpeg?q=70",
  },
];

const Products = () => {
  return (
    <div className="w-full bg-[#FAFAFA] py-6 px-4 md:px-10">

      {/* Men's Section */}
      <h1 id="men" className="text-3xl sm:text-4xl font-bold mt-5 text-center">
        Men's
      </h1>
      <hr className="border-red-300 w-28 mt-2 mb-8 mx-auto" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {mensProducts.map((item) => (
          <Link to={`/productmen/${item.id}`} key={item.id}>
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300">
              <img
                className="w-full h-48 sm:h-60 md:h-72 object-cover"
                src={item.image}
                alt={item.name}
              />
              <div className="p-3">
                <h1 className="text-[#878787] font-bold text-xs">PHYSIL</h1>
                <h2 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2">
                  {item.name}
                </h2>
                <p className="text-sm font-bold mt-1">
                  ₹{item.price}
                  <span className="line-through text-gray-500 font-normal text-xs ml-1">
                    ₹{item.originalPrice}
                  </span>
                  <span className="text-green-600 font-semibold text-xs ml-1">
                    {item.discount}% off
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Women's Section */}
      <h1
        id="women"
        className="text-3xl sm:text-4xl font-bold text-center mt-12"
      >
        Women's
      </h1>
      <hr className="border-red-300 w-40 mt-2 mb-8 mx-auto" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {womensProducts.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300">
              <img
                className="w-full h-48 sm:h-60 md:h-72 object-cover"
                src={item.image}
                alt={item.name}
              />
              <div className="p-3">
                <h1 className="text-[#878787] font-bold text-xs">PHYSIL</h1>
                <h2 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2">
                  {item.name}
                </h2>
                <p className="text-sm font-bold mt-1">
                  ₹{item.price}
                  <span className="line-through text-gray-500 font-normal text-xs ml-1">
                    ₹{item.originalPrice}
                  </span>
                  <span className="text-green-600 font-semibold text-xs ml-1">
                    {item.discount}% off
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
