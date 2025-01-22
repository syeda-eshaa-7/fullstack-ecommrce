

"use client";
import React, { useState,useContext } from "react";
import Link from "next/link";
import { CartContext } from '@/app/context/CartContaxt';

const MainNavbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle
  const {totalQuantity, showCart, setShowCart}:any = useContext(CartContext);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/products", label: "Product" },
    { href: "/pages", label: "Pages" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-lg font-semibold transition-all duration-300 
                ${
                  activeLink === link.href
                    ? "text-#007580 font-bold"
                    : "text-gray-700 hover:text-[#007580] "
                } 
                hover:drop-shadow-[0_0_7px_rgba(34,197,94,0.5)]`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Number (aligned to the right) */}
        <div className="hidden md:flex ml-auto text-lg font-semibold text-gray-700">
          Contact: <span className="font-normal">031234567890</span>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 bg-gray-100 p-4 flex flex-col gap-4 md:hidden">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setMenuOpen(false); // Close menu on link click
              }}
              className={`text-lg font-semibold transition-all duration-300 
                ${
                  activeLink === link.href
                    ? "text-seagreen font-bold"
                    : "text-gray-700 hover:text-green-400"
                } 
                hover:drop-shadow-[0_0_7px_rgba(34,197,94,0.5)]`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
