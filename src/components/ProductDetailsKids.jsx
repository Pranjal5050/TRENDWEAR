import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Product data (unchanged)
const products = [
    {
    id: 1,
    name: "Women Embroidered Pure Cotton Straight Kurta (Blue)",
    price: 499,
    originalPrice: 599,
    discount: 50,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/s/7/k/3-4-years-flp-m-rj-parent-9-the-lalcollection-kidswear-original-imahefhwguvw26rg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/v/y/i/3-4-years-flp-m-rj-parent-9-the-lalcollection-kidswear-original-imahefhwqmzhump8.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/d/u/n/3-4-years-flp-m-rj-parent-9-the-lalcollection-kidswear-original-imahefhwc5kg2rzq.jpeg?q=70", // fake 3rd angle
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/l/i/x/3-4-years-flp-m-rj-parent-9-the-lalcollection-kidswear-original-imahefhwfdqzsqhf.jpeg?q=70", // fake 4th angle
    ],
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 299,
    originalPrice: 499,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/k/e/q/0-6-months-new-fancy-the-fashion-prime-original-imahfm7mnktt4ffs.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/w/c/h/5-6-years-new-fancy-the-fashion-prime-original-imahe8zfks687e5z.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/4/s/0/0-6-months-new-fancy-the-fashion-prime-original-imahfm7mvuptwbjy.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/y/9/s/0-6-months-new-fancy-the-fashion-prime-original-imahfm7mfdgrwysw.jpeg?q=70", // fake
    ],
  },
  {
    id: 3,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 399,
    originalPrice: 499,
    discount: 55,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/g/u/j/8-9-years-dres01-druzzee-original-imahyggrmk5tyend.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/2/2/e/8-9-years-dres01-druzzee-original-imahyggrtmc6rg47.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/u/s/s/8-9-years-dres01-druzzee-original-imahyggrg9aycuk5.jpeg?q=70",
    ],
  },
  {
    id: 4,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 599,
    originalPrice: 999,
    discount: 55,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/r/x/w/5-6-years-dmzh01-druzzee-original-imah74bhbf4syg6x.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/r/t/v/5-6-years-dmzh01-druzzee-original-imah74bhpjrxmdxg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/k/z/d/5-6-years-dmzh01-druzzee-original-imah74bhzthesgkf.jpeg?q=70",      
    ],
  },
    {
    id: 5,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1299,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jumpsuit/f/x/j/9-10-years-jumpsuit-with-jacket-lm-fashion-original-imahadfytrmnjzky.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jumpsuit/o/e/0/9-10-years-jumpsuit-with-jacket-lm-fashion-original-imahadfyjyfgz4ky.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jumpsuit/j/4/q/9-10-years-jumpsuit-with-jacket-lm-fashion-original-imahadfyzakzfenn.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/jumpsuit/e/j/u/9-10-years-jumpsuit-with-jacket-lm-fashion-original-imahadfykcyayek6.jpeg?q=70",
    ],
  },
    {
    id: 6,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 99,
    originalPrice: 199,
    discount: 55,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/e/p/e/6-12-months-maroon05-jim-trend-original-imah8kqwqyftqkgj.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/b/1/u/6-12-months-maroon05-jim-trend-original-imah8kqwmnh6kya6.jpeg?q=70",
    ],
  },
    {
    id: 7,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 299,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-jacket/d/s/6/9-12-months-baby-winter-wear-dealpakki-baby-boys-baby-girls-original-imahdq2ykgqajpta.jpeg?q=70",
    ],
  },
    {
    id: 8,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 249,
    originalPrice: 399,
    discount: 55,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/l/e/x/15-16-years-110150690dutch-canal-coolsters-by-pantaloons-original-imah6gpjguudsbnz.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/z/0/q/15-16-years-110150690dutch-canal-coolsters-by-pantaloons-original-imah6gpjhudzeptf.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/i/v/m/15-16-years-110150690dutch-canal-coolsters-by-pantaloons-original-imah6gpjbeqzkgkd.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/a/m/7/15-16-years-110150690dutch-canal-coolsters-by-pantaloons-original-imah6gpjzbps7zvw.jpeg?q=70",
    ],
  },
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
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-gray-600 hover:text-black"
      >
        <i className="ri-arrow-left-s-line text-xl mr-1"></i>
        <span className="text-sm">Back</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div>
          <img
            src={previewImage}
            alt={product.name}
            className="w-full h-[130vw] sm:h-[60vw] md:h-[40vw] object-top rounded-md shadow-sm"
          />

          {/* Thumbnails */}
          <div className="flex flex-wrap gap-2 mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onMouseEnter={() => setPreviewImage(img)}
                className={`w-16 h-20 object-cover border rounded-md cursor-pointer transition duration-200 ${
                  previewImage === img ? "border-indigo-500" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            {product.name}
          </h1>

          <p className="text-xl font-semibold text-black mt-2">
            ₹{product.price}{" "}
            <span className="line-through text-gray-500 text-base font-normal ml-2">
              ₹{product.originalPrice}
            </span>{" "}
            <span className="text-green-600 text-base font-semibold ml-2">
              {product.discount}% off
            </span>
          </p>

          {product.offer && (
            <p className="mt-3 text-indigo-600 font-medium">{product.offer}</p>
          )}

          <p className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed">
            This product is crafted with precision and style. Featuring a
            contemporary design and breathable fabric, it's perfect for everyday
            wear or festive occasions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 mt-8 w-full">
  <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 border border-gray-400 text-black hover:bg-black hover:text-white transition">
    <i className="ri-shopping-cart-line"></i> Add to Cart
  </button>
  <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-[#FB641B] hover:bg-[#d04f0f] text-white transition">
    <i className="ri-shopping-bag-line"></i> Buy Now
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
