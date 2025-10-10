import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Example products
const products = [
    {
    id: 1,
    name: "Women Embroidered Pure Cotton Straight Kurta (Blue)",
    price: 499,
    originalPrice: 599,
    discount: 50,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-bike-mobile-holder/p/r/u/universal-bike-mount-holder-verson-2-0-metal-body-360-degree-original-imah4spnfr9nhgjw.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bike-mobile-holder/a/u/p/universal-bike-mount-holder-verson-2-0-metal-body-360-degree-original-imahcfyxukkhqh7g.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bike-mobile-holder/d/t/k/universal-bike-mount-holder-verson-2-0-metal-body-360-degree-original-imahcfyxezkgmyvx.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bike-mobile-holder/h/z/5/universal-bike-mount-holder-verson-2-0-metal-body-360-degree-original-imahcfyxsjmh3z3p.jpeg?q=70",
    ],
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 299,
    originalPrice: 499,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-washing-cloth/k/p/y/1-car101cdpo1-car101-original-imahgfuabwemdj6k.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-washing-cloth/h/x/a/1-car101cdpo1-car101-original-imahgfua9gqzubf3.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-washing-cloth/a/l/h/1-car101cdpo1-car101-original-imahgfuaejnrhztm.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-washing-cloth/4/r/x/1-car101cdpo1-car101-original-imahgfua565mzxfn.jpeg?q=70",
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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-light-bulb/f/n/c/12-a2-six-mode-yellow-white-with-red-blue-60w-dc-9v-60v-dual-original-imah8mxahtdbhvr5.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-light-bulb/i/6/o/12-tr15-six-mode-yellow-white-with-red-blue-60w-dc-9v-60v-dual-original-imah8gjwz2hgtegy.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-light-bulb/q/d/k/12-tr15-six-mode-yellow-white-with-red-blue-60w-dc-9v-60v-dual-original-imah8gjwategdgqv.jpeg?q=70",
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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-washing-cloth/o/q/9/4-30x40-800-gsm-microfiber-towel-auto-hub-original-imaghs3fhknbjrf2.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/ki3gknk0-0/vehicle-washing-cloth/p/l/i/40-x-40cm-cleaning-cloth-autyle-original-imafxyjhzyyarvgk.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/kq9ta4w0/vehicle-washing-cloth/i/m/s/ultra-soft-microfiber-polishing-cleaning-cloth-auto-hub-original-imag4bcx5zdfrwhs.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-washing-cloth/q/c/s/6-30x40-800-gsm-microfiber-towel-auto-hub-original-imaghs3yxdndffjz.jpeg?q=70"
    ],
  },
    {
    id: 5,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1299,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/x/q/z/rfid-protected-genuine-high-quality-leather-wallet-for-men-1-11-original-imahgqashkwagrt4.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/g/o/u/rfid-protected-genuine-high-quality-leather-wallet-for-men-1-11-original-imahgqasrmmx4dvm.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/r/p/m/rfid-protected-genuine-high-quality-leather-wallet-for-men-1-11-original-imahgqaszz5dgcwp.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/a/o/v/rfid-protected-genuine-high-quality-leather-wallet-for-men-1-11-original-imahgqasc9ertdfm.jpeg?q=70",
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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/9/h/i/-original-imahgf9f7hsehzyu.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/n/5/p/-original-imahgf9fxhzfhh6w.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/q/q/9/-original-imahgf9fhdgkxdae.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/i/c/q/-original-imahgf9fxxymvzny.jpeg?q=70"
    ],
  },
    {
    id: 7,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 299,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/necklace-chain/m/q/a/-original-imahfvfe9d4jgzsj.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/o/0/z/-original-imahfsrgwhbzqsn6.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/6/v/3/-original-imahfsrfcjbdgpym.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/2/l/x/-original-imahfsrfwfassast.jpeg?q=70"
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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-kajal/n/s/3/0-35-charcoal-black-long-stay-kajal-0-35-g-mamaearth-original-imaghgqy2zp2ns5y.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/pendant-locket/w/f/a/-original-imahftazgbhub2zc.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/pendant-locket/y/0/j/-original-imahftaz2zqqfqx3.jpeg?q=70",
    ],
  },
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
