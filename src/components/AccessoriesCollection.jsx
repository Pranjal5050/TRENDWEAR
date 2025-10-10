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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-bike-mobile-holder/p/r/u/universal-bike-mount-holder-verson-2-0-metal-body-360-degree-original-imah4spnfr9nhgjw.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bike-mobile-holder/a/u/p/universal-bike-mount-holder-verson-2-0-metal-body-360-degree-original-imahcfyxukkhqh7g.jpeg?q=70",
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 299,
    originalPrice: 499,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-washing-cloth/k/p/y/1-car101cdpo1-car101-original-imahgfuabwemdj6k.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-washing-cloth/h/x/a/1-car101cdpo1-car101-original-imahgfua9gqzubf3.jpeg?q=70",
  },
  {
    id: 3,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 399,
    originalPrice: 499,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-light-bulb/f/n/c/12-a2-six-mode-yellow-white-with-red-blue-60w-dc-9v-60v-dual-original-imah8mxahtdbhvr5.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-light-bulb/i/6/o/12-tr15-six-mode-yellow-white-with-red-blue-60w-dc-9v-60v-dual-original-imah8gjwz2hgtegy.jpeg?q=70",
  },
  {
    id: 4,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 599,
    originalPrice: 999,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-washing-cloth/o/q/9/4-30x40-800-gsm-microfiber-towel-auto-hub-original-imaghs3fhknbjrf2.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/ki3gknk0-0/vehicle-washing-cloth/p/l/i/40-x-40cm-cleaning-cloth-autyle-original-imafxyjhzyyarvgk.jpeg?q=70",
  },
  {
    id: 5,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1299,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/x/q/z/rfid-protected-genuine-high-quality-leather-wallet-for-men-1-11-original-imahgqashkwagrt4.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/g/o/u/rfid-protected-genuine-high-quality-leather-wallet-for-men-1-11-original-imahgqasrmmx4dvm.jpeg?q=70",
  },
  {
    id: 6,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 99,
    originalPrice: 199,
    offer: "Top Discount of the Sale",
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/9/h/i/-original-imahgf9f7hsehzyu.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/n/5/p/-original-imahgf9fxhzfhh6w.jpeg?q=70",
  },
  {
    id: 7,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 299,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/necklace-chain/m/q/a/-original-imahfvfe9d4jgzsj.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/o/0/z/-original-imahfsrgwhbzqsn6.jpeg?q=70",
  },
  {
    id: 8,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 249,
    originalPrice: 399,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kajal/n/s/3/0-35-charcoal-black-long-stay-kajal-0-35-g-mamaearth-original-imaghgqy2zp2ns5y.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/pendant-locket/w/f/a/-original-imahftazgbhub2zc.jpeg?q=70",
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
    navigate(`/productaccessories/${id}`);
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
