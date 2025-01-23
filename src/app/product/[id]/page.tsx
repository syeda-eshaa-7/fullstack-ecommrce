"use client"; // Ensure this is a client-side component

import React, { useContext } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import { client } from "@/sanity/lib/client";
import { CartContext } from "@/app/context/CartContaxt"; // Corrected the import path
import Featured from "@/app/components/Featured";
import { urlFor } from "@/sanity/lib/image";

type Product = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  description: string;
  image: string;
  inventory?: number;
  tags?: string[];
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductPage = ({ params }: PageProps) => {
  const { id }: any = params; // Access the id directly from params
  const { cartItems, addProduct, qty, decQty, incQty, addToWishlist, wishlistItems }: any = useContext(CartContext);

  // GROQ Query to fetch a specific product by ID
  const query = `
    *[_type == "products" && _id == $id][0] {
      _id,
      title,
      "image": image.asset->url,
      price,
      priceWithoutDiscount,
      description,
      inventory,
      tags
    }
  `;

  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const productData: Product = await client.fetch(query, { id });
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-gray-600">Product Not Found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addProduct(product, qty); // Add product to cart
    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist(product); // Add product to wishlist
    toast.success(`${product.title} added to wishlist!`, {
      position: "top-right",
    });
  };

  const isProductInWishlist = wishlistItems.some((item: Product) => item._id === product._id);

  return (
    <div className="container mx-auto p-6">
      {/* Toast Notifications */}
      <Toaster />

      {/* Main Product Display */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Image
            src={product.image ? urlFor(product.image).width(400).url() : "/placeholder-image.png"}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-xl text-green-600">${product.price}</p>
          {product.priceWithoutDiscount && (
            <p className="text-gray-600 line-through">${product.priceWithoutDiscount}</p>
          )}
          <p className="text-gray-600">{product.description}</p>

          <div className="flex space-x-4 mt-4">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add To Cart
            </button>

            {/* Add to Wishlist Button */}
            <button
              onClick={handleAddToWishlist}
              className={`bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600 ${
                isProductInWishlist ? "bg-gray-500 cursor-not-allowed" : ""
              }`}
              disabled={isProductInWishlist}
            >
              {isProductInWishlist ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section (if applicable) */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Featured Products</h3>
          <a href="#" className="text-blue-500 hover:underline">
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {/* Map over featured products */}
        </div>
      </div>
      <Featured />
    </div>
  );
};

export default ProductPage;
