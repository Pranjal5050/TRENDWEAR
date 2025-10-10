import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Example products
const products = [
  {
    id: 1,
    name: "Women Embroidered Pure Cotton Straight Kurta (Blues)",
    price: 499,
    originalPrice: 599,
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
    price: 299,
    originalPrice: 499,
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
    price: 399,
    originalPrice: 499,
    discount: 55,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/o/7/f/m-men-printed-round-neck-polyester-black-and-white-t-shirt-combo-original-imahegr8hngmg6yz.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/7/a/m-men-printed-round-neck-polyester-black-and-white-t-shirt-combo-original-imahegr8fyg38tqh.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-t-shirt/e/d/c/m-men-printed-round-neck-polyester-black-and-white-t-shirt-combo-original-imahd2j7h8hrag5u.jpeg?q=70", // fake
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
    originalPrice: 1299,
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
    price: 99,
    originalPrice: 199,
    discount: 55,
    offer: "Top Discount of the Sale",
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
    price: 149,
    originalPrice: 299,
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
    price: 249,
    originalPrice: 399,
    discount: 55,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/d/a/j/xl-ko-5006grey-jompers-original-imagrvhd2hrqj7zb.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/u/o/d/xl-ko-5006grey-jompers-original-imagrvhdp68r7ryg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/t/2/c/xl-ko-5006grey-jompers-original-imagrvhdhjk2g5zf.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/b/j/xl-ko-5006grey-jompers-original-imagrvhdj5tvhvye.jpeg?q=70", // fake
    ],
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  const [preview, setPreview] = useState(product?.images[0]);

  if (!product) return <div className="text-center mt-20">Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <button onClick={() => navigate(-1)} className="mb-4">Back</button>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img src={preview} alt={product.name} className="w-full h-96 object-cover" />
          <div className="flex gap-2 mt-2">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-16 h-20 object-cover border cursor-pointer"
                onMouseEnter={() => setPreview(img)}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-xl mt-2">₹{product.price}</p>
          <div className="flex gap-5 mt-2">
            <button
            className="mt-4 px-6 py-2 bg-gray-800 text-white cursor-pointer"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="mt-4 px-6 py-2 border-1 cursor-pointer"
          >
            Buy Now
          </button>
          </div>
          <p className="text-gray-400 mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, tenetur iste adipisci aspernatur corporis quidem dolorum tempora eum eius voluptate.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
