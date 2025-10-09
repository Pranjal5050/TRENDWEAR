import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const initialProducts = [
  {
    id: 1,
    name: "Women Embroidered Pure Cotton Straight Kurta (Blue)",
    price: 499,
    originalPrice: 999,
    discount: 50,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/e/e/e/l-sk-023-green-khadi-kurta-deepyog-original-imah2mv8w4uxzchs.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/k/o/q/l-sk-023-green-khadi-kurta-deepyog-original-imah2mv8gvtur38z.jpeg?q=70",
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 699,
    originalPrice: 1599,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/i/r/v/xl-hek606-dressar-original-imahfv42kzjtgrjs.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/r/u/e/xl-hek606-dressar-original-imahfv42wqssehfh.jpeg?q=70",
  },
  {
    id: 3,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 799,
    originalPrice: 1999,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/i/r/3xl-butti-maroon-kamex-original-imahfxcjsmhvcqgs.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kurta/u/3/w/l-butti-maroon-kamex-original-imahcst8spszjhny.jpeg?q=70",
  },
  {
    id: 4,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 199,
    originalPrice: 599,
    offer: "Top Discount of the Sale",
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/r/v/m-b133-pratha-red-youthnic-original-imah925pvvczwdgt.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/t/l/m-b133-pratha-red-youthnic-original-imah925pnwxzszun.jpeg?q=70",
  },
  {
    id: 5,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 549,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/s/k/n/s-pink-dupatta-set-ryn-divastri-original-imah8t35rycgrzpb.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/7/e/6/s-pink-dupatta-set-ryn-divastri-original-imah8t35vzcetvnn.jpeg?q=70",
  },
  {
    id: 6,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 349,
    originalPrice: 699,
    offer: "Top Discount of the Sale",
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/o/1/b/free-2-star-sheldrom-mart-unstitched-original-imahc6ad5vwfja6j.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/h/f/e/free-2-star-sheldrom-mart-unstitched-original-imahc6adpbynjfns.jpeg?q=70",
  },
  {
    id: 7,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 99,
    originalPrice: 299,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/c/q/j/xxl-bg-29-tabahi-original-imah5nw3zhagfsbk.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/y/z/2/xxl-bg-29-tabahi-original-imah5nw3ja8m2fdq.jpeg?q=70",
  },
  {
    id: 8,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 499,
    offer: "Top Discount of the Sale",
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/n/2/w/s-women-sharara-dupatta-set-black-jayleen-original-imahfjq2rvhmafzw.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/q/c/2/s-women-sharara-dupatta-set-black-jayleen-original-imahfjq2zeguwjqb.jpeg?q=70",
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
    navigate(`/product/${id}`);
  };

  return (
   <div className="w-full bg-gray-50 py-4 px-3 md:px-8">
      <div className="flex justify-end mb-4">
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
              <h2 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2">
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
