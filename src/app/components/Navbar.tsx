


// "use client";

// import React, { useEffect, useState, useContext } from "react";
// import Link from "next/link";
// import LoadingBar from "react-top-loading-bar";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { FiShoppingCart } from "react-icons/fi";
// import { CartContext } from "../context/CartContaxt";
// import { FaRegHeart } from "react-icons/fa6";
// import { ClerkLoaded, useUser, SignInButton } from "@clerk/nextjs";

// const Navbar = () => {
//   const [progress, setProgress] = useState(0);
//   const pathname = usePathname();
//   const { totalQuantity }: any = useContext(CartContext); // Assuming totalQuantity comes from CartContext
//   const { isSignedIn } = useUser(); // Access the current user's sign-in status

//   useEffect(() => {
//     setProgress(20);
//     const timer1 = setTimeout(() => setProgress(40), 100);
//     const timer2 = setTimeout(() => setProgress(100), 400);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, [pathname]);

//   const handleCartClick = () => {
//     if (!isSignedIn) {
//       alert("Please log in to view your cart.");
//       return; // Prevent further action if not signed in
//     }
//   };

//   return (
//     <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
//       <LoadingBar
//         color="#933ce6"
//         progress={progress}
//         onLoaderFinished={() => setProgress(0)}
//       />
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo and Title */}
//         <Link href={"/"} className="flex items-center ml-[123px] gap-2">
//           <Image src={"/Logo Icon.png"} alt="logo" height={40} width={40} />
//           <h1 className="text-3xl font-extrabold">Comforty</h1>
//         </Link>

//         {/* Buttons aligned to the right */}
//         <div className="ml-auto flex space-x-4 items-center">
//           <ClerkLoaded>
//             {isSignedIn ? (
//               <Link
//                 href="/cart"
//                 className="relative flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-200 transition"
//                 onClick={handleCartClick} // Handle click only if user is signed in
//               >
//                 <FiShoppingCart size={24} />
//                 {/* Badge for total items */}
//                 {totalQuantity > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                     {totalQuantity}
//                   </span>
//                 )}
//                 <span>Cart</span>
//               </Link>
//             ) : (
//               // Show "Login" button if the user is not signed in
//               <Link
//                 href="/sign-in"
//                 className="px-4 py-2 border rounded hover:bg-gray-200 transition"
//               >
//                 Login
//               </Link>
//             )}
//           </ClerkLoaded>

//        <div>   <Link
//             href="/wishlist"
//             className="relative flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-200 transition"
//           >
//             <FaRegHeart size={24} />
//             {/* Badge for wishlist items (if needed) */}
//             {totalQuantity > 0 && (
//               <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {totalQuantity}
//               </span>
//             )}
//             <span>Wishlist</span>
//           </Link></div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../context/CartContaxt";
import { FaRegHeart } from "react-icons/fa";
// Assuming useUser can be used directly

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu
  const pathname = usePathname();
  const { totalQuantity, wishlistItems }: any = useContext(CartContext); // Assuming wishlistItems are available
 // Access the current user's sign-in status

  useEffect(() => {
    setProgress(20);
    const timer1 = setTimeout(() => setProgress(40), 100);
    const timer2 = setTimeout(() => setProgress(100), 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  const handleCartClick = () => {
     {
      alert("Please log in to view your cart.");
      return; // Prevent further action if not signed in
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
        {/* Logo and Title */}
        <Link href={"/"} className="flex items-center ml-4 sm:ml-0 gap-2">
          <Image src={"/Logo Icon.png"} alt="logo" height={40} width={40} />
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
          className={`ml-auto flex space-x-4 items-center sm:flex ${isMenuOpen ? "flex-col absolute top-16 right-4 bg-white p-4 w-40" : "hidden sm:flex"}`}
        >
          {/* Cart Section */}
           (
            <Link
              href="/cart"
              className="relative flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-200 transition"
              onClick={handleCartClick}
            >
              <FiShoppingCart size={24} />
              {/* Badge for total items in cart */}
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
              <span>Cart</span>
            </Link>
           
            <Link
              href="/sign-in"
              className="px-4 py-2 border rounded hover:bg-gray-200 transition"
            >
              Login
            </Link>
          

          {/* Wishlist Section */}
          <Link
            href="/wishlist"
            className="relative flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-200 transition"
          >
            <FaRegHeart size={24} />
            {/* Badge for wishlist items */}
            {wishlistItems && wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
            <span>Wishlist</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
