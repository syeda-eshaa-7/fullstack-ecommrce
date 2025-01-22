// 'use client'
// import React from 'react';
// import Image from 'next/image';

// interface ImageData {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
// }

// const images: ImageData[] = [
//   {
//     src: '/Logo (1).png',
//     alt: 'Image 1',
//     width: 200,  // Reduced size
//     height: 270  // Reduced size
//   },
//   {
//     src: '/Logo (2).png',
//     alt: 'Image 2',
//     width: 200,
//     height: 270
//   },
//   {
//     src: '/Logo (3).png',
//     alt: 'Image 3',
//     width: 200,
//     height: 270
//   },
//   {
//     src: '/Logo (4).png',
//     alt: 'Image 4',
//     width: 200,
//     height: 270
//   },
//   {
//     src: '/Logo (5).png',
//     alt: 'Image 5',
//     width: 200,
//     height: 270
//   },
//   {
//     src: '/Logo (5).png',
//     alt: 'Image 5',
//     width: 200,
//     height: 270
//   }
//   // Add more images as needed
// ];

// const Slider = () => {
//   return (
//     <div className="relative w-full h-[300px]">
//       {/* Image Gallery */}
//       <ul className="grid grid-cols-6 justify-center w-full h-full gap-5 overflow-hidden">
//         {images.map((image, index) => (
//           <li key={index} className="flex-shrink-0">
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={image.width}
//               height={image.height}
//               className="rounded-lg shadow-lg bg-transparent" 
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Slider;


import React from "react";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-20 pt-14 px-4">
      <div className="flex justify-center items-center">
        <Image src="/Logo (3).png" alt="Zaphier Logo" width={85} height={87} />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (4).png"
          alt="Pipe Drive Logo"
          width={107}
          height={109}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (4).png"
          alt="Cib Bank Logo"
          width={135}
          height={139}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (3).png"
          alt="Company 4 Logo"
          width={63}
          height={65}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (2).png"
          alt="Burnt Toast Logo"
          width={98}
          height={101}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (1).png"
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div> <div className="flex justify-center items-center">
        <Image
          src="/Logo (6).png"
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div> <div className="flex justify-center items-center">
        <Image
          src="/Logo (4).png"
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/Logo (6).png" alt="Moz Logo" width={84} height={87} />
      </div>
    </div>
  );
};

export default Slider;