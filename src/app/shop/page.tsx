import React from 'react'
import Find from '../components/Find'
import { FaTruck, FaCheck } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiSolidLeaf } from "react-icons/bi";
import { AiOutlineCustomerService } from "react-icons/ai";
const page = () => {
  return (
    <div>
        <Find/>
        <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[36px] font-semibold text-center mb-16 text-gray-800">
        What makes our shops Different
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-white p-10 text-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-center text-[#007580] text-5xl mb-6">
            <AiOutlineCustomerService />
          </div>
          <h3 className="text-[24px] font-medium text-gray-800 mb-6">
           Customer service
          </h3>
          <p className="text-[18px] text-gray-600">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        <div className="bg-white p-10 text-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-center text-[#007580] text-5xl mb-6">
            <FaCheck />
          </div>
          <h3 className="text-[24px] font-medium text-gray-800 mb-6">
            Made by true artisans
          </h3>
          <p className="text-[18px] text-gray-600">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>

        <div className="bg-white p-10 text-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-center text-[#007580] text-5xl mb-6">
            <FaRegMoneyBillAlt />
          </div>
          <h3 className="text-[24px] font-medium text-gray-800 mb-6">
            Unbeatable prices 
          </h3>
          <p className="text-[18px] text-gray-600">
            For our materials and quality, you wontfind better prices
            anywhere.
          </p>
        </div>

        <div className="bg-white p-10 text-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-center text-[#007580] text-5xl mb-6">
            <BiSolidLeaf />
          </div>
          <h3 className="text-[24px] font-medium text-gray-800 mb-6">
            Recycled packaging
          </h3>
          <p className="text-[18px] text-gray-600">
            We use 100% recycled material to ensure our footprint is more
            manageable.
          </p>
        </div>
      </div>
    </div>
       
      
    </div>
  )
}

export default page
