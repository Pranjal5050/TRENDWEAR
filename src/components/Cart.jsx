import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (!cartItems || cartItems.length === 0)
    return <div className="text-center mt-20">Your cart is empty.</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center py-4 border-b">
          <div className="flex items-center gap-4">
            <img src={item.images[0]} alt={item.name} className="w-20 h-24 object-cover" />
            <div>
              <h2>{item.name}</h2>
              <p>₹{item.price} × {item.quantity}</p>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="text-red-500">
            Remove
          </button>
        </div>
      ))}
      <div className="flex justify-between mt-6">
        <button onClick={clearCart} className="px-6 py-2 bg-gray-800 text-white">Clear Cart</button>
        <h2>Total: ₹{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h2>
      </div>
    </div>
  );
};

export default Cart;
