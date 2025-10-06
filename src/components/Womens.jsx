import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Womens = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Women Embroidered Pure Cotton Straight Kurta (Blue)",
      price: 499,
      originalPrice: 999,
      discount: 50,
      offer: "Top Discount of the Sale",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/d/r/xl-kurta-91012-a-jagra-original-imaheehmbxydgm4h.jpeg?q=70",
      hoverImage:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/2/p/i/xl-kurta-91012-a-jagra-original-imaheehmy6qfemkv.jpeg?q=70",
    },
    {
      id: 2,
      name: "Women A-line White Maxi/Full Length Dress",
      price: 899,
      originalPrice: 1999,
      discount: 55,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/i/r/v/xl-hek606-dressar-original-imahfv42kzjtgrjs.jpeg?q=70",
      hoverImage:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/r/u/e/xl-hek606-dressar-original-imahfv42wqssehfh.jpeg?q=70",
    },
    {
      id: 3,
      name: "Women Printed Viscose Rayon A-line Kurta (Pink)",
      price: 1299,
      originalPrice: 2999,
      discount: 57,
      offer: "Top Discount of the Sale",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/h/5/u/xl-ku027b-raanisa-original-imahcny7d4fnwq2z.jpeg?q=70",
      hoverImage:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/r/h/xl-ku027b-raanisa-original-imahcny7frc3uz6h.jpeg?q=70",
    },
    {
      id: 4,
      name: "Women Printed Viscose Rayon A-line Kurta (Pink)",
      price: 1299,
      originalPrice: 2999,
      discount: 57,
      offer: "Top Discount of the Sale",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/x/q/p/m-065-purple-star-kurta-bkapparels-original-imahcbvfhzpzmfjw.jpeg?q=70",
      hoverImage:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/4/r/m-065-purple-star-kurta-bkapparels-original-imahcbvfxwdut5jg.jpeg?q=70",
    },
    {
      id: 5,
      name: "Women Printed Viscose Rayon A-line Kurta (Pink)",
      price: 1299,
      originalPrice: 2999,
      discount: 57,
      offer: "Top Discount of the Sale",
      image:
        "https://rukminim2.flixcart.com/image/612/612/l5h2xe80/kurta/s/k/n/s-ac-ku-20-collar-amar-creation-original-imagg4w8fsymjzgk.jpeg?q=70",
      hoverImage:
        "https://rukminim2.flixcart.com/image/612/612/l5h2xe80/kurta/s/9/n/s-ac-ku-20-collar-amar-creation-original-imagg4w8gksacmxh.jpeg?q=70",
    },
    {
      id: 6,
      name: "Women Printed Viscose Rayon A-line Kurta (Pink)",
      price: 1299,
      originalPrice: 2999,
      discount: 57,
      offer: "Top Discount of the Sale",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/k/q/i/-original-imahf2xkzvcqdkr3.jpeg?q=70",
      hoverImage:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/c/o/p/-original-imahf2xkndxjw2j8.jpeg?q=70",
    },
    {
      id: 7,
      name: "Women Printed Viscose Rayon A-line Kurta (Pink)",
      price: 1299,
      originalPrice: 2999,
      discount: 57,
      offer: "Top Discount of the Sale",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/b/m/xl-gold-looms21-original-imahe5pspvnfvagy.jpeg?q=70",
      hoverImage:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/j/d/h/xl-1001-aachuki-original-imahb2hc6frswgnf.jpeg?q=70",
    },
    {
      id: 8,
      name: "Women Printed Viscose Rayon A-line Kurta (Pink)",
      price: 1299,
      originalPrice: 2999,
      discount: 57,
      offer: "Top Discount of the Sale",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/a/d/7/m-kurta-106789-jsimar-original-imah8h7dkmzzy87r.jpeg?q=70",
      hoverImage:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/c/s/p/m-kurta-106789-jsimar-original-imah8h7dqx6jhc8g.jpeg?q=70",
    },
    
  ];

  const [products, setProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const toggleSort = () => {
    const sortedProducts =
      sortOrder === "lowToHigh"
        ? [...products].sort((a, b) => b.price - a.price)
        : [...products].sort((a, b) => a.price - b.price);

    setSortOrder(sortOrder === "lowToHigh" ? "highToLow" : "lowToHigh");
    setProducts(sortedProducts);
  };

  return (
    <div className="w-full bg-gray-50 py-4 px-3 md:px-8">
      {/* Sort Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleSort}
          className="flex items-center gap-1 bg-indigo-500 text-white px-3 py-1 rounded text-sm shadow"
        >
          {sortOrder === "lowToHigh" ? (
            <>
              <FaArrowDown />
              High to Low
            </>
          ) : (
            <>
              <FaArrowUp />
              Low to High
            </>
          )}
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer"
            onMouseEnter={() => setHoveredProductId(item.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            {/* Image Swap */}
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

            {/* Product Details */}
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
