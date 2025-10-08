import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Sample product data with multiple angles
const products = [
  {
    id: 1,
    name: "Women Embroidered Pure Cotton Straight Kurta (Blue)",
    price: 499,
    originalPrice: 999,
    discount: 50,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/e/e/e/l-sk-023-green-khadi-kurta-deepyog-original-imah2mv8w4uxzchs.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/k/o/q/l-sk-023-green-khadi-kurta-deepyog-original-imah2mv8gvtur38z.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/n/y/j/l-sk-023-green-khadi-kurta-deepyog-original-imah2mv8zgsv4pzc.jpeg?q=70", // fake 3rd angle
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/f/b/8/l-sk-023-green-khadi-kurta-deepyog-original-imah2mv8fef5wf4d.jpeg?q=70", // fake 4th angle
    ],
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/i/r/v/xl-hek606-dressar-original-imahfv42kzjtgrjs.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/r/u/e/xl-hek606-dressar-original-imahfv42wqssehfh.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/6/f/a/xl-hek606-dressar-original-imahfv42uw4qugsh.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/b/i/z/xl-hek606-dressar-original-imahfv42eyc2hazb.jpeg?q=70", // fake
    ],
  },
  {
    id: 3,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/i/r/3xl-butti-maroon-kamex-original-imahfxcjsmhvcqgs.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kurta/u/3/w/l-butti-maroon-kamex-original-imahcst8spszjhny.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/x/g/z/3xl-butti-maroon-kamex-original-imahfxcjbvk5cuxh.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kurta/y/v/s/3xl-butti-maroon-kamex-original-imahcst8vfqvgxgs.jpeg?q=70", // fake
    ],
  },
  {
    id: 4,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/r/v/m-b133-pratha-red-youthnic-original-imah925pvvczwdgt.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/t/l/m-b133-pratha-red-youthnic-original-imah925pnwxzszun.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/n/x/t/m-b133-pratha-red-youthnic-original-imah925pgzethtqx.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/4/m/j/m-b133-pratha-red-youthnic-original-imah925pzyqcwkur.jpeg?q=70", // fake
    ],
  },
  // Add more products similarly...
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));
  const [previewImage, setPreviewImage] = useState(product?.images?.[0]);

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-20">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-lg"
      >
        <i class="ri-arrow-left-s-line"></i><span className="text-sm">Back</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image section */}
        <div>
          <img
            src={previewImage}
            alt={product.name}
            className="w-92 h-[120vw] object-cover md:h-[40vw] rounded-sm"
          />

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onMouseEnter={() => setPreviewImage(img)}
                className={`w-16 h-20 object-cover border rounded cursor-pointer ${
                  previewImage === img ? "border-indigo-500" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product details */}
        <div>
          <h1 className="text-[13px] mt-5 md:text-2xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>

          <p className="text-lg font-semibold mt-2">
            ₹{product.price}{" "}
            <span className="line-through text-gray-500 text-base">
              ₹{product.originalPrice}
            </span>{" "}
            <span className="text-green-600 text-base font-semibold">
              {product.discount}% off
            </span>
          </p>

          {product.offer && (
            <p className="mt-2 text-indigo-600 font-medium">{product.offer}</p>
          )}

          <p className="mt-6 text-gray-600">
            This product is crafted with precision and style. Featuring a
            contemporary design and breathable fabric, it's perfect for everyday
            wear or festive occasions.
          </p>
          <div className="flex items-center gap-2 mt-10">
            <button className="px-18 py-2 border-1 shadow-sm border-none hover:bg-black hover:text-white cursor-pointer"><i class="ri-shopping-cart-line"></i> Add to cart</button>
            <button className="px-18 py-2 border-1 cursor-pointer border-none bg-[#FB641B] hover:bg-[#d04f0f] text-white"><i class="ri-shopping-bag-line"></i> Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
