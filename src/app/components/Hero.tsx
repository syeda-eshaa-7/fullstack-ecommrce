// import React from 'react'
// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <div className="flex justify-center items-start min-h-screen"> 
//       <div className="w-full lg:w-[1731px] h-[850px] bg-gray-300 relative flex items-center justify-between px-4 lg:px-16">
//         {/* Left Side Content */}
//         <div className="space-y-6 pl-0 lg:pl-16 ml-0 lg:ml-[123px] text-center lg:text-left">
//           <p className="text-3xl">WELCOME TO CHAIRY</p>
//           <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
//             Best Furniture <br />Collection For Your <br />Interior
//           </h1>
//           <button className="mt-6 inline-flex text-white bg-[#029FAE] border-0 py-4 px-12 text-xl focus:outline-none hover:bg-gray-300 rounded">
//             Subscribe
//           </button>
//         </div>

//         {/* Right Side Image */}
//         <div className="absolute top-[115px] right-[10px] lg:right-[140px] mr-4" style={{ width: '434px', height: '584px', opacity: '1' }}>
          // <Image
          //   src="/Product Image.png" // Replace with your image path
          //   alt="Hero Image"
          //   width={434}
          //   height={584}
          // />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero


// import React from 'react'
// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <div className="flex justify-center items-start min-h-screen"> 
//       <div className="w-full lg:w-[1731px] h-[850px] bg-gray-300 relative flex items-center justify-between px-4 lg:px-16">
//         {/* Left Side Content */}
//         <div className="space-y-6 pl-0 lg:pl-16 ml-0 lg:ml-[123px] text-center lg:text-left">
//           <p className="text-3xl">WELCOME TO CHAIRY</p>
//           <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
//             Best Furniture <br />Collection For Your <br />Interior
//           </h1>
//           <button className="mt-6 inline-flex text-white bg-[#029FAE] border-0 py-4 px-12 text-xl focus:outline-none hover:bg-gray-300 rounded">
//            <p> Shop Now --</p>
//           </button>
//         </div>

//         {/* Right Side Image (hidden on smaller screens) */}
//         <div className="absolute top-[115px] right-[10px] lg:right-[140px] mr-4 hidden lg:block">
//           <Image
//             src="/Product Image.png" // Replace with your image path
//             alt="Hero Image"
//             layout="intrinsic" // Maintains aspect ratio
//             width={434}
//             height={584}
//             className="max-w-full h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero


// "use client";

// import React from "react";
// import Image from "next/image";
// import SALE_QUERYResult from "@/sanity/helpers/index";
// import { urlFor } from "@/sanity/lib/image";

// import { Button } from "@/components/ui/button";
// import { Carousel } from "@/components/ui/carousel";

// const Hero = ({ sales }: { sales: typeof SALE_QUERYResult }) => {
//   return (
//     <div className="flex justify-center items-start min-h-screen">
//       <div className="w-full max-w-screen-xl h-[850px] bg-gray-300 relative flex flex-col items-center justify-between px-4 lg:px-16">
//         {/* Carousel */}
//         <Carousel className="w-full h-full">
//           {sales.map((sale: any) => (
//             <div
//               key={sale?._id}
//               className="flex flex-col lg:flex-row items-center justify-between snap-center w-full"
//             >
//               {/* Left Side Content */}
//               <div className="space-y-6 text-center lg:text-left pl-0 lg:pl-16 ml-0 lg:ml-[123px]">
//                 <span className="inline-block mb-2 md:mb-4 bg-blue-200 text-darkBlue px-4 py-2 rounded capitalize">
//                   {sale?.badge} {sale?.discountAmount}% off
//                 </span>
//                 <p className="text-3xl">WELCOME TO CHAIRY</p>
//                 <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
//                   {sale.title}
//                 </h1>
//                 <p className="text-gray-700 mb-4">{sale?.description}</p>
//                 <p className="mb-4">
//                   Use code:{" "}
//                   <span className="font-semibold text-blue-500 uppercase">
//                     {sale.couponCode}
//                   </span>{" "}
//                   for{" "}
//                   <span className="font-semibold">
//                     {sale?.discountAmount}%
//                   </span>{" "}
//                   OFF
//                 </p>
//                 <Button className="mt-6 py-4 px-12 text-xl">Shop Now --</Button>
//               </div>

//               {/* Right Side Image */}
//               {sale?.image && (
//                 <div className="hidden lg:block">
//                   <Image
//                     src={urlFor(sale?.image).url()}
//                     alt="bannerImage"
//                     width={434}
//                     height={584}
//                     className="max-w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
//                   />
//                 </div>
//               )}
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";

import React from "react";
import Image from "next/image";
import SALE_QUERYResult from "@/sanity/helpers/index";
import { urlFor } from "@/sanity/lib/image";

const Hero = ({ sales }: { sales: [] }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full lg:w-[1731px] h-[850px] bg-gray-300 relative flex items-center justify-between px-4 lg:px-16 rounded-lg shadow-md overflow-hidden">
        {sales.map((sale: any) => (
          <div
            key={sale?._id}
            className="flex flex-col lg:flex-row items-center justify-between w-full p-6 lg:p-12"
          >
            {/* Left Side Content */}
            <div className="space-y-6 text-center lg:text-left pl-0 lg:pl-16 ml-0 lg:ml-[123px]">
              <p className="text-3xl text-gray-800">WELCOME TO CHAIRY</p>
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-gray-900">
                {sale.title || "Best Furniture Collection For Your Interior"}
              </h1>
              <p className="text-gray-700">
                {sale.description ||
                  "Discover the perfect blend of style and comfort for your interior spaces."}
              </p>
              <button className="mt-6 inline-flex items-center justify-center text-white bg-[#029FAE] border-0 py-4 px-12 text-xl focus:outline-none hover:bg-gray-400 hover:text-black rounded transition duration-300">
                Shop Now --
              </button>
            </div>

            {/* Right Side Image */}
            {sale?.image && (
              <div className="absolute top-[115px] right-[10px] lg:right-[140px] mr-4 hidden lg:block">
                <Image
                  src={urlFor(sale?.image).url()}
                  alt="Hero Image.png"
                  width={434}
                  height={584}
                  className="max-w-full h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
