

"use client";

import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LucidePackage2 } from "lucide-react";
import { ClerkLoaded, useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { CartContext } from "../context/CartContaxt";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const pathname = usePathname();
  const { totalQuantity, wishlistItems }: any = useContext(CartContext);
  const { user, isSignedIn } = useUser();

  // Loading bar effect on navigation
  useEffect(() => {
    setProgress(20);
    const timer1 = setTimeout(() => setProgress(40), 100);
    const timer2 = setTimeout(() => setProgress(100), 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  // Function to handle "Orders" click
  const handleOrdersClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isSignedIn) {
      e.preventDefault(); // Prevent navigation
      alert("Please log in to view your orders.");
    }
  };

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-4 sm:ml-0 gap-2">
          <Image src="/Logo Icon.png" alt="logo" height={40} width={40} />
          <h1 className="text-3xl font-extrabold">Comforty</h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center space-x-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Menu Items */}
        <div
          className={`ml-auto flex space-x-4 items-center ${
            isMenuOpen ? "flex flex-col absolute top-16 right-4 bg-white p-4 w-40" : "hidden sm:flex"
          }`}
        >
          {/* Cart Section */}
          <Link href="/cart" className="relative flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-200 transition">
            <FiShoppingCart size={24} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
            <span>Cart</span>
          </Link>

          {/* Wishlist Section */}
          <Link href="/wishlist" className="relative flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-200 transition">
            <FaRegHeart size={24} />
            {wishlistItems?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
            <span>Wishlist</span>
          </Link>

          {/* Orders Section */}
          <ClerkLoaded>
            <Link
              href="/orders"
              className="relative flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-200 transition"
              onClick={handleOrdersClick} // Check if the user is signed in
            >
              <LucidePackage2 size={24} />
              <span>Orders</span>
            </Link>

            {/* Auth Section */}
            {isSignedIn ? (
              <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none">
                <UserButton />
                <div className="text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md cursor-pointer hover:shadow-none">
                  <FiUser className="text-2xl text-darkBlue" />
                  <div className="flex flex-col">
                    <p className="text-xs">Account</p>
                    <p className="font-semibold">Login</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
