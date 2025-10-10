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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/k/x/v/-original-imagzvxusgcmhgka.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/w/w/u/9to5-flawless-matte-complexion-compact-almond-perfect-cover-original-imagt46xq8vjbfth.jpeg?q=70",
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 299,
    originalPrice: 499,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/l/j/9/-original-imagz7uewrprxykk.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/p/u/5/-original-imagz7uet2hgc7ef.jpeg?q=70",
  },
  {
    id: 3,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 399,
    originalPrice: 499,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/makeup-kit/h/b/g/beauty-essentials-makeup-kit-10-piece-set-for-women-set-161-vozo-original-imah4fyvzjdzmbkq.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/makeup-kit/a/m/a/flawless-face-makeup-kit-10-shades-for-natural-everyday-look-set-original-imah3hpw89ahcz6x.jpeg?q=70",
  },
  {
    id: 4,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 599,
    originalPrice: 999,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/i/x/2/makeup-kit-sets-one-stop-beauty-package-for-beginners-and-original-imah58fazwxbygxn.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/i/x/2/makeup-kit-sets-one-stop-beauty-package-for-beginners-and-original-imah58fazwxbygxn.jpeg?q=70",
  },
  {
    id: 5,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1299,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/d/k/u/-original-imagz7ufezs6qrye.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/8/2/h/-original-imagz7ufkeg7stpg.jpeg?q=70",
  },
  {
    id: 6,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 99,
    originalPrice: 199,
    offer: "Top Discount of the Sale",
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/z/j/0/makeup-kit-for-girls-full-set-face-eye-makeup-combo-kit-pack-of-original-imah7hnfckcdte4q.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/c/t/f/10-items-makeup-combo-kit-lipstick-mascara-eyebrow-pencil-gel-original-imah7frzdr7sehwg.jpeg?q=70",
  },
  {
    id: 7,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 299,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/compact/b/g/z/-original-imagzfd4mubhm82h.jpeg?q=70",
    hoverImage:
    "https://rukminim2.flixcart.com/image/612/612/xif0q/compact/f/s/s/-original-imahgbgkyge2uqfm.jpeg?q=70",
  },
  {
    id: 8,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 249,
    originalPrice: 399,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/x/3/s/-original-imagzbzwvvz2nktx.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/j/h/q/-original-imagx23wvyk5zxkf.jpeg?q=70",
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
    navigate(`/productcosmetics/${id}`);
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
