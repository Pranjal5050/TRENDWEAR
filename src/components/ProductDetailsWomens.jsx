import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Example products
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
    price: 699,
    originalPrice: 1599,
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
    price: 799,
    originalPrice: 1999,
    discount: 55,
    offer: "Top Discount of the Sale",
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
    price: 199,
    originalPrice: 5999,
    discount: 55,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/p/r/v/m-b133-pratha-red-youthnic-original-imah925pvvczwdgt.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/t/l/m-b133-pratha-red-youthnic-original-imah925pnwxzszun.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/n/x/t/m-b133-pratha-red-youthnic-original-imah925pgzethtqx.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/4/m/j/m-b133-pratha-red-youthnic-original-imah925pzyqcwkur.jpeg?q=70", // fake
    ],
  },
  {
    id: 5,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 549,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/s/k/n/s-pink-dupatta-set-ryn-divastri-original-imah8t35rycgrzpb.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/7/e/6/s-pink-dupatta-set-ryn-divastri-original-imah8t35vzcetvnn.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/r/x/x/s-pink-dupatta-set-ryn-divastri-original-imah8t35qzmkwqpa.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/h/u/r/s-pink-dupatta-set-ryn-divastri-original-imah8t353ubtvnsm.jpeg?q=70", // fake
    ],
  },
  {
    id: 6,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 349,
    originalPrice: 699,
    discount: 55,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/o/1/b/free-2-star-sheldrom-mart-unstitched-original-imahc6ad5vwfja6j.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/h/f/e/free-2-star-sheldrom-mart-unstitched-original-imahc6adpbynjfns.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/h/x/2/free-2-star-sheldrom-mart-unstitched-original-imahc6adv8vz9yjt.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/u/l/4/free-2-star-sheldrom-mart-unstitched-original-imahc6adqjyrfubn.jpeg?q=70", // fake
    ],
  },
  {
    id: 7,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 99,
    originalPrice: 299,
    discount: 55,
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/c/q/j/xxl-bg-29-tabahi-original-imah5nw3zhagfsbk.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/y/z/2/xxl-bg-29-tabahi-original-imah5nw3ja8m2fdq.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/q/f/q/xxl-bg-29-tabahi-original-imah5nw3vsyzbzex.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/j/u/z/xxl-bg-29-tabahi-original-imah5nw3euba2wz3.jpeg?q=70", // fake
    ],
  },
  {
    id: 8,
    name: "Women A-line White Maxi/Full Length Dress",
    price: 149,
    originalPrice: 499,
    discount: 55,
    offer: "Top Discount of the Sale",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/n/2/w/s-women-sharara-dupatta-set-black-jayleen-original-imahfjq2rvhmafzw.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/q/c/2/s-women-sharara-dupatta-set-black-jayleen-original-imahfjq2zeguwjqb.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/b/c/y/s-women-sharara-dupatta-set-black-jayleen-original-imahfjq2nftjp7fm.jpeg?q=70", // fake
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/0/c/d/s-women-sharara-dupatta-set-black-jayleen-original-imahfjq2rav9h9bg.jpeg?q=70", // fake
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
