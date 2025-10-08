import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const initialProducts = [
  {
    id: 1,
    name: "Women Embroidered Pure Cotton Straight Kurta (Blue)",
    price: 499,
    originalPrice: 599,
    discount: 50,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/s/7/k/3-4-years-flp-m-rj-parent-9-the-lalcollection-kidswear-original-imahefhwguvw26rg.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/v/y/i/3-4-years-flp-m-rj-parent-9-the-lalcollection-kidswear-original-imahefhwqmzhump8.jpeg?q=70",
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 299,
    originalPrice: 499,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/k/e/q/0-6-months-new-fancy-the-fashion-prime-original-imahfm7mnktt4ffs.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/w/c/h/5-6-years-new-fancy-the-fashion-prime-original-imahe8zfks687e5z.jpeg?q=70",
  },
  {
    id: 3,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 399,
    originalPrice: 499,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/g/u/j/8-9-years-dres01-druzzee-original-imahyggrmk5tyend.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/2/2/e/8-9-years-dres01-druzzee-original-imahyggrtmc6rg47.jpeg?q=70",
  },
  {
    id: 4,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 599,
    originalPrice: 999,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/r/x/w/5-6-years-dmzh01-druzzee-original-imah74bhbf4syg6x.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/r/t/v/5-6-years-dmzh01-druzzee-original-imah74bhpjrxmdxg.jpeg?q=70",
  },
  {
    id: 5,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1299,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jumpsuit/f/x/j/9-10-years-jumpsuit-with-jacket-lm-fashion-original-imahadfytrmnjzky.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jumpsuit/o/e/0/9-10-years-jumpsuit-with-jacket-lm-fashion-original-imahadfyjyfgz4ky.jpeg?q=70",
  },
  {
    id: 6,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 99,
    originalPrice: 199,
    offer: "Top Discount of the Sale",
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/e/p/e/6-12-months-maroon05-jim-trend-original-imah8kqwqyftqkgj.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/b/1/u/6-12-months-maroon05-jim-trend-original-imah8kqwmnh6kya6.jpeg?q=70",
  },
  {
    id: 7,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 299,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-jacket/d/s/6/9-12-months-baby-winter-wear-dealpakki-baby-boys-baby-girls-original-imahdq2ykgqajpta.jpeg?q=70",
  },
  {
    id: 8,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 249,
    originalPrice: 399,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/l/e/x/15-16-years-110150690dutch-canal-coolsters-by-pantaloons-original-imah6gpjguudsbnz.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/z/0/q/15-16-years-110150690dutch-canal-coolsters-by-pantaloons-original-imah6gpjhudzeptf.jpeg?q=70",
  },
  // Add more products...
];

const Womens = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const toggleSort = () => {
    const sorted = [...products].sort((a, b) =>
      sortOrder === "lowToHigh" ? b.price - a.price : a.price - b.price
    );
    setProducts(sorted);
    setSortOrder(sortOrder === "lowToHigh" ? "highToLow" : "lowToHigh");
  };

  const handleCardClick = (id) => {
    navigate(`/productkids/${id}`);
  };

  return (
   <div className="w-full bg-gray-50 py-4 px-3 md:px-8">
      <div className="flex justify-between items-center mb-4">
        <button
        onClick={() => navigate(-1)}
        className="mb-4 text-lg cursor-pointer"
      >
        <div className="flex items-center justify-center">
          <i className="ri-arrow-left-s-line"></i><span className="text-sm">Back</span>
        </div>
      </button>

        <button
          onClick={toggleSort}
          className="flex items-center gap-1 bg-indigo-500 text-white px-3 py-1 rounded text-sm shadow"
        >
          {sortOrder === "lowToHigh" ? (
            <>
              <FaArrowDown /> High to Low
            </>
          ) : (
            <>
              <FaArrowUp /> Low to High
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer"
            onClick={() => handleCardClick(item.id)}
            onMouseEnter={() => setHoveredProductId(item.id)}
            onMouseLeave={() => setHoveredProductId(null)}
         >
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={
                  hoveredProductId === item.id && item.hoverImage
                    ? item.hoverImage
                    : item.image
                }
                alt={item.name}
                className="w-full h-full object-cover object-top transition-all duration-300"
              />
           </div>
            <div className="p-3">
             <h1 className="text-[#878787] font-bold text-xs">PHYSIL</h1>
              <h2 className="text-sm font-semibold text-gray-600 mt-1 line-clamp-2">
                {item.name}
             </h2>
              <p className="text-[15px] font-bold mt-1">
                ₹{item.price}{" "}
                <span className="line-through text-gray-500 font-normal text-sm">
                  ₹{item.originalPrice}
                </span>{" "}
                <span className="text-green-600 font-semibold text-sm">
                  {item.discount}% off
                </span>
             </p>
              {item.offer && (
                <p className="text-[#764ccb] text-xs font-semibold mt-2">
                  {item.offer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Womens;
