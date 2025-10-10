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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/k/x/v/-original-imagzvxusgcmhgka.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/w/w/u/9to5-flawless-matte-complexion-compact-almond-perfect-cover-original-imagt46xq8vjbfth.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/g/h/6/9to5-flawless-matte-complexion-compact-almond-perfect-cover-original-imagt46xjbjdn7pf.jpeg?q=70", // fake 3rd angle
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/d/g/2/9to5-flawless-matte-complexion-compact-almond-perfect-cover-original-imagt46xfzwkvy33.jpeg?q=70", // fake 4th angle
    ],
  },
  {
    id: 2,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 299,
    originalPrice: 499,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/l/j/9/-original-imagz7uewrprxykk.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/p/u/5/-original-imagz7uet2hgc7ef.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/h/3/u/-original-imagz7ue5jfn36mp.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/w/b/z/-original-imagz7uefwfyvkgy.jpeg?q=70", // fake
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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/makeup-kit/h/b/g/beauty-essentials-makeup-kit-10-piece-set-for-women-set-161-vozo-original-imah4fyvzjdzmbkq.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/makeup-kit/a/m/a/flawless-face-makeup-kit-10-shades-for-natural-everyday-look-set-original-imah3hpw89ahcz6x.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/makeup-kit/f/f/x/flawless-face-makeup-kit-10-shades-for-natural-everyday-look-set-original-imah3hpwyujsfhhu.jpeg?q=70",
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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/i/x/2/makeup-kit-sets-one-stop-beauty-package-for-beginners-and-original-imah58fazwxbygxn.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/i/x/2/makeup-kit-sets-one-stop-beauty-package-for-beginners-and-original-imah58fazwxbygxn.jpeg?q=70",
    ],
  },
    {
    id: 5,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 899,
    originalPrice: 1299,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/d/k/u/-original-imagz7ufezs6qrye.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/8/2/h/-original-imagz7ufkeg7stpg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/w/l/z/-original-imagz7ufhguyrsdm.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/c/g/n/-original-imagz7ufagfrbsae.jpeg?q=70",
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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/z/j/0/makeup-kit-for-girls-full-set-face-eye-makeup-combo-kit-pack-of-original-imah7hnfckcdte4q.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/c/t/f/10-items-makeup-combo-kit-lipstick-mascara-eyebrow-pencil-gel-original-imah7frzdr7sehwg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/f/t/s/face-makeup-combo-for-women-and-girls-pack-of-3-3-adr123-toroka-original-imahfxgvu9ugkkzz.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/combo-kit/n/y/7/professional-hd-waterproof-makeup-kit-combo-for-women-girls-all-original-imah7ggn8qnm7p3n.jpeg?q=70"
    ],
  },
    {
    id: 7,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 299,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/compact/b/g/z/-original-imagzfd4mubhm82h.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/compact/f/s/s/-original-imahgbgkyge2uqfm.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/compact/v/u/9/-original-imagzfd4shumzebj.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/compact/d/z/n/-original-imagzfd4hvvsyfa6.jpeg?q=70"
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
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/x/3/s/-original-imagzbzwvvz2nktx.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/j/h/q/-original-imagx23wvyk5zxkf.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/r/a/p/-original-imagzbzwjuhzy5ge.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/l/i/h/-original-imagzbzwsyxpzkrr.jpeg?q=70",
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
