


"use client";

import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../context/CartContaxt";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { urlFor } from "@/sanity/lib/image";

import { SignInButton, useAuth, useUser } from "@clerk/nextjs";

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const {
    onRemove,
    toggleCartItemQty,
    totalPrice,
    cartItems,
    addToWishlist,
  }: any = useContext(CartContext);

  // const { isSignedIn } = useUser();
 
  const [loading, setLading] = useState(false);

  // Function to handle checkout
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems: [{ id: 1, price: 20, quantity: 2 }] }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData.error);
        alert(errorData.error || 'Checkout failed.');
        return;
      }
  
      const data = await response.json();
      window.location.href = data.url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('An error occurred. Please try again.');
    }
  };
  

  

  return (
    <>
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className="text-[22px] font-medium pl-3 mb-6">Cart</h2>

          {cartItems.map((product: any) => (
            <div
              key={product._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
            >
              {/* Image Section */}
              <div className="flex items-center space-x-6">
                <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={product.image ? urlFor(product.image).width(500).url() : '/placeholder-image.png'}
                    alt={product.title || "Product Image"}
                    width={128} // Adjust for consistent sizing
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-[16px] font-semibold text-[#272343] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[15px] font-normal text-[#757575] mb-1">
                    {product.description || "No description available"}
                  </p>
                  <p className="text-[15px] text-green-600 font-medium">
                    Inventory:{" "}
                    {product.inventory > 0
                      ? `${product.inventory} Available`
                      : "Out of Stock"}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <CiHeart
                      className="cursor-pointer text-gray-600 hover:text-red-500"
                      size={30}
                      onClick={() => addToWishlist(product)}
                    />
                    <RiDeleteBin6Line
                      className="cursor-pointer text-gray-600 hover:text-red-500"
                      size={25}
                      onClick={() => onRemove(product)}
                    />
                  </div>
                </div>
              </div>

              {/* Price and Quantity */}
              <div className="flex flex-col items-center">
                <p className="text-[16px] font-medium text-[#111111] mb-2">
                  ${product.price * product.quantity}
                </p>
                <div className="quantity-desc flex items-center border border-gray-300 rounded-lg">
                  <button
                    className={`px-2 py-1 ${
                      product.quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() =>
                      product.quantity > 1 && toggleCartItemQty(product._id, "minus")
                    }
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="px-4">{product.quantity}</span>
                  <button
                    className={`px-2 py-1 ${
                      product.quantity >= product.inventory
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() =>
                      product.quantity < product.inventory &&
                      toggleCartItemQty(product._id, "plus")
                    }
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg font-semibold">${totalPrice || 0}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg">Estimated Delivery & Handling</p>
              <p className="text-lg font-semibold text-green-500">Free</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold">${totalPrice || 0}</p>
            </div>
          
          <button
               onClick={handleCheckout}
           
           className="w-full py-3 rounded-lg bg-[#029FAE] text-white font-semibold hover:bg-[#027c86]"
         >
           Checkout
         </button>

{/* {!isSignedIn ? (
          <div>
            <SignInButton mode="modal">
              <Button className="mt-6 w-full bg-[#029FAE] text-white py-6 rounded-3xl text-lg font-medium hover:bg-[#02abaee6]">
               Checkout
              </Button>
            </SignInButton>
          </div>
        ) : (
          <div>
            <Button
              onClick={handleCheckout}
              disabled={loading}
              className="mt-6 w-full bg-[#029FAE] text-[#ffffff] py-6 rounded-3xl text-lg font-medium hover:bg-[#02abaee6]"
            >
              {loading ? "Processing..." : "Checkout"}
            </Button>
          </div>
        )} */}
        
        
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;


