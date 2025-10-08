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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/b/g/-original-imahf6tc2gxegcht.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/3/k/y/s-kz-mr-tshirt-kaezri-original-imagyr82sfarzdd3.jpeg?q=70",
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 299,
    originalPrice: 499,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/kokdci80/t-shirt/n/p/0/s-12504484-roadster-original-imag2znyunaw7pzb.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/kokdci80/t-shirt/n/d/b/s-12504484-roadster-original-imag2znypzg2wfxw.jpeg?q=70",
  },
  {
    id: 3,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 399,
    originalPrice: 499,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/7/f/m-men-printed-round-neck-polyester-black-and-white-t-shirt-combo-original-imahegr8hngmg6yz.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/7/a/m-men-printed-round-neck-polyester-black-and-white-t-shirt-combo-original-imahegr8fyg38tqh.jpeg?q=70",
  },
  {
    id: 4,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 599,
    originalPrice: 999,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/y/l/n/xl-ts36-vebnor-original-imahfykf8czxebrp.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/v/h/xl-ts36-vebnor-original-imahfykfztgpgpzs.jpeg?q=70",
  },
  {
    id: 5,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1299,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/o/a/m-os-100-goveirdo-b-new-veirdo-original-imahfsvheswqmtyd.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/w/4/m-os-100-goveirdo-b-new-veirdo-original-imahfsvhag5nynez.jpeg?q=70",
  },
  {
    id: 6,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 99,
    originalPrice: 199,
    offer: "Top Discount of the Sale",
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/c/a/u/m-shorts-sti-original-imahehthmzaezrzf.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/q/y/t/m-shorts-sti-original-imahekysknedpafn.jpeg?q=70",
  },
  {
    id: 7,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 299,
    discount: 55,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/t/a/2/32-kttmensshort152-kotty-original-imah39gqxycbve9n.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/s/4/4/32-kttmensshort152-kotty-original-imah39gqhutehfak.jpeg?q=70",
  },
  {
    id: 8,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 249,
    originalPrice: 399,
    discount: 55,
    offer: "Top Discount of the Sale",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/d/a/j/xl-ko-5006grey-jompers-original-imagrvhd2hrqj7zb.jpeg?q=70",
    hoverImage:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/u/o/d/xl-ko-5006grey-jompers-original-imagrvhdp68r7ryg.jpeg?q=70",
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
    navigate(`/productmen/${id}`);
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
