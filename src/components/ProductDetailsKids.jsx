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
