// import React from "react";
// import Image from "next/image"; // Make sure Image is imported from Next.js

// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   price: string;
//   imageSrc: string;
// };

// const products: Product[] = [
//   {
//     id: 1,
//     title: "The Popular Suede Sofa",
//     description: "A comfy suede sofa for your living room.",
//     price: "$99.00",
//     imageSrc: "/1.jpg",
//   },
//   {
//     id: 2,
//     title: "The Dandy Chair",
//     description: "A stylish chair for your office.",
//     price: "$99.00",
//     imageSrc: "/2.jpg",
//   },
//   {
//     id: 3,
//     title: "The Cozy Lounge Chair",
//     description: "Perfect chair for relaxing.",
//     price: "$99.00",
//     imageSrc: "/3.jpg",
//   },
// ];

// const Cards = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto mt-32 px-6">
//       <h2 className="text-[32px] font-semibold text-left mb-12">
//         Our Popular Products
//       </h2>
//       <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
//         {products.map((product) => (
//           <div key={product.id} className="text-center">
//             <Image
//               src={product.imageSrc}
//               alt={product.title}
//               width={590}
//               height={375}
//               className="object-cover mx-auto"
//             />
//             <p className="pt-5 text-[20px] font-normal text-left">{product.title}</p>
//             <p className="pt-2 text-[18px] font-normal mb-32 text-left">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React from "react";
import Image from "next/image"; // Make sure Image is imported from Next.js

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "The Popular Suede Sofa",
    description: "A comfy suede sofa for your living room.",
    price: "$99.00",
    imageSrc: "/1.jpg",
  },
  {
    id: 2,
    title: "The Dandy Chair",
    description: "A stylish chair for your office.",
    price: "$99.00",
    imageSrc: "/2.jpg",
  },
  {
    id: 3,
    title: "The Cozy Lounge Chair",
    description: "Perfect chair for relaxing.",
    price: "$99.00",
    imageSrc: "/3.jpg",
  },
];

const Cards = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-left mb-12">
        Our Popular Products
      </h2>
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between">
        {products.map((product) => (
          <div key={product.id} className="text-center p-4">
            <div className="w-[400px] h-[500px] mx-auto relative">
              <Image
                src={product.imageSrc}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="pt-5 text-[20px] font-normal text-left">{product.title}</p>
            <p className="pt-2 text-[18px] font-normal mb-32 text-left">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
