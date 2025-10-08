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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/b/g/-original-imahf6tc2gxegcht.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/3/k/y/s-kz-mr-tshirt-kaezri-original-imagyr82sfarzdd3.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/9/1/s-kz-mr-tshirt-kaezri-original-imagyr82yvs4utfv.jpeg?q=70", // fake 3rd angle
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/p/r/f/l-kz-mr-tshirt-kaezri-original-imagpvfbjzfrtgen.jpeg?q=70", // fake 4th angle
    ],
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/kokdci80/t-shirt/n/p/0/s-12504484-roadster-original-imag2znyunaw7pzb.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/kokdci80/t-shirt/n/d/b/s-12504484-roadster-original-imag2znypzg2wfxw.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/kokdci80/t-shirt/x/2/a/s-12504484-roadster-original-imag2znyr3mvvru9.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/kokdci80/t-shirt/b/w/g/s-12504484-roadster-original-imag2zny2b48peuj.jpeg?q=70", // fake
    ],
  },
  {
    id: 3,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/7/f/m-men-printed-round-neck-polyester-black-and-white-t-shirt-combo-original-imahegr8hngmg6yz.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/7/a/m-men-printed-round-neck-polyester-black-and-white-t-shirt-combo-original-imahegr8fyg38tqh.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-t-shirt/e/d/c/m-men-printed-round-neck-polyester-black-and-white-t-shirt-combo-original-imahd2j7h8hrag5u.jpeg?q=70", // fake
    ],
  },
  {
    id: 4,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/y/l/n/xl-ts36-vebnor-original-imahfykf8czxebrp.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/v/h/xl-ts36-vebnor-original-imahfykfztgpgpzs.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/x/b/xl-ts36-vebnor-original-imahfykfxdggtqku.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/b/j/xl-ts36-vebnor-original-imahfykfhhqtgzeq.jpeg?q=70", // fake


      
    ],
  },
    {
    id: 5,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/o/a/m-os-100-goveirdo-b-new-veirdo-original-imahfsvheswqmtyd.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/w/4/m-os-100-goveirdo-b-new-veirdo-original-imahfsvhag5nynez.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/x/3/m-os-100-goveirdo-b-new-veirdo-original-imahfsvhtn4whdh6.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/a/z/m-os-100-goveirdo-b-new-veirdo-original-imahfsvhe4gac2ua.jpeg?q=70", // fake
    ],
  },
    {
    id: 6,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/c/a/u/m-shorts-sti-original-imahehthmzaezrzf.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/q/y/t/m-shorts-sti-original-imahekysknedpafn.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/o/b/9/s-shorts-sti-original-imahekysqfzzagst.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/w/t/e/m-shorts-sti-original-imahekysudnybknx.jpeg?q=70", // fake
    ],
  },
    {
    id: 7,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/t/a/2/32-kttmensshort152-kotty-original-imah39gqxycbve9n.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/s/4/4/32-kttmensshort152-kotty-original-imah39gqhutehfak.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/n/g/f/32-kttmensshort152-kotty-original-imah39gqv7hngryz.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/short/s/k/d/32-kttmensshort152-kotty-original-imah39gqwbvnjuap.jpeg?q=70", // fake
    ],
  },
    {
    id: 8,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/d/a/j/xl-ko-5006grey-jompers-original-imagrvhd2hrqj7zb.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/u/o/d/xl-ko-5006grey-jompers-original-imagrvhdp68r7ryg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/t/2/c/xl-ko-5006grey-jompers-original-imagrvhdhjk2g5zf.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/b/j/xl-ko-5006grey-jompers-original-imagrvhdj5tvhvye.jpeg?q=70", // fake
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
