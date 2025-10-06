import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Womens = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Casual Shirt",
      price: 499,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/x/s/j/xl-jne3869-dr-a-janasya-original-imah79knskh8h9xz.jpeg?q=70",
    },
    {
      id: 2,
      name: "Sneakers",
      price: 899,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/h/l/3/xxl-6101-sheetal-associates-original-imagmnemtrdhgrnc.jpeg?q=70",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 1299,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/b/o/e/xxl-kurti227893031-doriya-original-imahgm8dg8rgmhgd.jpeg?q=70",
    },
    {
      id: 4,
      name: "T-Shirt",
      price: 299,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/x/y/6/s-red-paak-tabeedah-original-imahg2unzvhuvxkp.jpeg?q=70",
    },
    {
      id: 5,
      name: "Jeans",
      price: 699,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/s/b/5/xl-gt-215-mauka-original-imahf6gh9wuqdwzg.jpeg?q=70",
    },
    {
      id: 6,
      name: "Jacket",
      price: 1599,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/d/h/j/m-ku1011-blue-dsk-studio-original-imaheky5sybcwmcq.jpeg?q=70",
    },
    {
      id: 7,
      name: "Sports Shoes",
      price: 1199,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/z/g/xl-sk-59-rani-2-tone-st-kurta-kjfab-original-imahex4ynbgkymat.jpeg?q=70",
    },
    {
      id: 8,
      name: "Formal Shoes",
      price: 999,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/o/y/o/s-sa19kr1365g-surhi-original-imahfn9brqghx7d6.jpeg?q=70",
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState("lowToHigh"); // or 'highToLow'

  const toggleSort = () => {
    let sortedProducts;

    if (sortOrder === "lowToHigh") {
      sortedProducts = [...products].sort((a, b) => b.price - a.price); // High to Low
      setSortOrder("highToLow");
    } else {
      sortedProducts = [...products].sort((a, b) => a.price - b.price); // Low to High
      setSortOrder("lowToHigh");
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="w-full bg-gray-50 py-8 px-5 md:px-10">

      {/* Sort Toggle Button */}
      <div className="flex justify-end mb-8">
        <button
          onClick={toggleSort}
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded-lg shadow-md transition text-[10px]"
        >
          {sortOrder === "lowToHigh" ? (
            <>
              <FaArrowDown />
              Price: High to Low
            </>
          ) : (
            <>
              <FaArrowUp />
              Price: Low to High
            </>
          )}
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-78 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-1 font-medium">₹{item.price}</p>
              <button className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-md text-sm font-medium text-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Womens;
