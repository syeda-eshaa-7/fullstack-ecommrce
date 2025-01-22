import Link from 'next/link';
import { FaCheck } from "react-icons/fa6";
import React from 'react';
import { IoIosArrowDown, IoIosInformationCircleOutline } from "react-icons/io";

function Header() {
  return (
    <div className="bg-[#272343] h-[48px]">
      <div className="max-w-7xl mx-auto h-[48px] text-white flex flex-wrap items-center justify-between px-4">
        {/* Left Section: Free Shipping */}
        <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
          <FaCheck aria-label="Check Icon" />
          <p className="truncate">Free Shipping On All Orders Over $50</p>
        </div>

        {/* Right Section: Language Selector, FAQ, and Need Help */}
        <div className="flex items-center gap-4 text-xs sm:text-sm md:text-base mt-2 sm:mt-0">
          {/* Language Selector */}
          <h1 className="flex items-center gap-1">
            Eng <IoIosArrowDown aria-label="Arrow Down Icon" />
          </h1>

          {/* FAQ */}
          <Link href="/faq" className="underline">
            FAQ
          </Link>

          {/* Need Help */}
          <div className="flex items-center gap-1">
            <IoIosInformationCircleOutline aria-label="Information Icon" />
            <p>Need Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;