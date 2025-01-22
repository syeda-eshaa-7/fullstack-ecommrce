// // components/Card.tsx
// 'use client'

// import Link from 'next/link';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';

// interface CardProps {
//   src: string;
//   alt: string;
//   title: string;
//   price: string;
// }

// const Card: React.FC<CardProps> = ({ src, alt, title, price }) => {
//   return (
//     <div className="p-4 md:w-1/3 sm:w-full w-full mb-6 relative group">
//       <div className="rounded-lg h-64 overflow-hidden relative">
//         <Link href={`/products/${encodeURIComponent(title.toLowerCase().replace(/ /g, '-'))}`}>
//           <Image 
//             alt={alt} 
//             className="object-cover object-center h-full w-full transition-transform duration-300 group-hover:scale-105" 
//             src={src} 
//             width={500} // Adjust width as needed
//             height={400} // Adjust height as needed
//           />
//         </Link>
//       </div>

//       <div className="mt-5 space-y-2">
//         <h2 className="text-xl font-medium title-font text-gray-900">
//           {title}
//         </h2>
//         <p className="text-lg font-semibold text-gray-800">
//           {price}
//         </p>
//       </div>

//       <div className="absolute bottom-2 right-2 text-black p-2 rounded-full">
//         <Link
//           href="/singlepage"
//           className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-300 transition"
//         >
//           <FiShoppingCart />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;


// pages/products.jsimport { client } from '@/sanity/lib/client';
// "use client"
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";


// export default async function ProductsCard( ) {
//   const products = await client.fetch(groq `*[_type=='productSchema']`)
//   console.log(products);
  
// }



// export default Products


// import React from 'react';
// import { groq } from 'next-sanity';
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';

// const Card = async () => {
//   // Fetch products from Sanity
//   const products = await client.fetch(groq`*[_type == "product"]`);

//   return (
//     <div className="bg-[#f8f8f8] w-full py-12 mt-[125px]">
//       <div className="container">
//         <div className="py-4">
//           <h1 className="text-3xl font-bold">Best Selling Products</h1>
//           <h2>Enjoy Up To 50%</h2>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
//           {products.map((product: any, index: number) => (
//             <div key={product._id} className="p-4 bg-white shadow rounded">
//               <Image
//               src={urlFor(product.image && product.image[0] ).url() }

//                 alt={product.name || 'Unnamed Product'}
//                 height={200}
//                 width={300}
//                 className="rounded"
//               />
//               <h3 className="mt-2 text-lg font-medium">{product.name || 'Unnamed Product'}</h3>
//               <p className="text-gray-500">${product.price || 'N/A'}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

// Remove 'use client' as this will be a server component


// import React from 'react';
// import { groq } from 'next-sanity';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';
// import Link from 'next/link';

// const Card = async () => {
//   const products = await client.fetch(groq`*[_type == "product"]`);

//   return (
//     <div className="bg-[#f8f8f8] w-full py-12 mt-[125px]">
//       <div className="container mx-auto px-4">
//         <div className="py-4 text-center">
//           <h1 className="text-3xl font-bold">Best Selling Products</h1>
//           <h2 className="text-lg text-gray-600">Enjoy Up To 50% Off</h2>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
//           {products.map((product: any, index: number) => {
//             const imageUrl = product.image ? urlFor(product.image).url() : '/placeholder-image.png'; // Fallback image

//             return (
//               <div key={index} className="p-4 bg-white shadow rounded">
//               <Link href={`/product/${product.slug.current}`}>  <Image
//                 src={imageUrl}

//                   alt={product.name || 'Unnamed Product'}
//                   height={400}
//                   width={400}
//                   className="object-cover rounded"
//                 /></Link>
//                 <h3 className="mt-2 text-lg font-medium">{product.name || 'Unnamed Product'}</h3>
//                 <p className="text-gray-500">${product.price || 'N/A'}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };



// export default Card;



// // components/Card.tsx
// 'use client';

// import Link from 'next/link';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { groq } from 'next-sanity';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';

// const Card = () => {
//   const [products, setProducts] = useState<any[]>([]);

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts = await client.fetch(groq`*[_type == "product"]`);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-9 md:w-1/3 sm:w-full w-full mb-6 relative group">
//       {products.map((product: any, index: number) => {
//         const imageUrl = product.image ? urlFor(product.image).url() : '/placeholder-image.png';

//         return (
//           <div key={index} className="p-4 md:w-1/3 sm:w-full w-full mb-6 relative group border rounded shadow hover:shadow-lg transition">
//             <div className="rounded-lg h-64 overflow-hidden relative">
//               <Image
//                 alt={product.name || 'Unnamed Product'}
//                 className="object-cover object-center h-full w-full transition-transform duration-300 group-hover:scale-105"
//                 src={imageUrl}
//                 width={500} // Adjust width as needed
//                 height={400} // Adjust height as needed
//               />
//             </div>

//             <div className="mt-5 space-y-2">
//               <h2 className="text-xl font-medium title-font text-gray-900">
//                 {product.name || 'Unnamed Product'}
//               </h2>
//               <p className="text-lg font-semibold text-gray-800">
//                 ${product.price || 'N/A'}
//               </p>
//             </div>

//             <div className="absolute bottom-2 right-2 text-black p-2 rounded-full">
//               <Link
//                 href={`/product/${product.slug?.current || ''}`}
//                 className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-300 transition"
//               >
//                 <FiShoppingCart />
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Card;

// 'use client';

// import Link from 'next/link';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { groq } from 'next-sanity';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';

// const Card = () => {
//   const [products, setProducts] = useState<any[]>([]);

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts = await client.fetch(groq`*[_type == "product"]`);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-8">
//       {products.map((product: any, index: number) => {
//         const imageUrl = product.image ? urlFor(product.image).url() : '/placeholder-image.png';

//         return (
//           <div
//             key={index}
//             className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-white group"
//           >
//             {/* Product Image */}
//             <div className="relative h-64">
//               <Image
//                 alt={product.name || 'Unnamed Product'}
//                 className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
//                 src={imageUrl}
//                 width={500}
//                 height={400}
//               />
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//               <h2 className="text-lg font-medium text-gray-900 truncate">
//                 {product.name || 'Unnamed Product'}
//               </h2>
//               <p className="text-gray-600 text-sm mb-4">
//                 {product.description || 'No description available'}
//               </p>
//               <p className="text-lg font-bold text-gray-800">${product.price || 'N/A'}</p>
//             </div>

//             {/* Add to Cart */}
//             <div className="p-4 flex justify-end">
//               <Link
//                 href={`/product/${product.slug?.current || ''}`}
//                 className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg text-gray-700 hover:bg-gray-200 hover:text-black transition"
//               >
//                 <FiShoppingCart />
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Card;



// 'use client';
// import { Product } from "@/sanity.types";

// import Link from 'next/link';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { groq } from 'next-sanity';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';

// const Card = () => {
//   const [products, setProducts] = useState<any[]>([]);

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts = await client.fetch(groq`
//           *[_type == "product"]{
//             _id,
//             title,
//             price,
//             description,
//             image{
//               asset->{
//                 _id,
//                 url
//               }
//             },
//             category,
//             inventory{
//               inStock,
//               reserved,
//               status
//             }
//           }
//         `);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Check if no products are available
//   if (products.length === 0) {
//     return <p className="text-center text-gray-500">No products available.</p>;
//   }

//   return (
//     <div
//       className={`grid ${
//         products.length === 1
//           ? 'grid-cols-1'
//           : products.length === 2
//           ? 'grid-cols-2'
//           : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
//       } gap-6 px-6 py-8`}
//     >
//       {products.map((product: any) => {
//         const imageUrl = product.image?.asset?.url || '/placeholder-image.png'; // Fallback if no image

//         return (
//           <div
//             key={product._id}
//             className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-white group"
//           >
//             {/* Product Image */}
//             <div className="relative h-64">
//               <Image
//                 alt={product.title || 'Unnamed Product'}
//                 className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
//                 src={imageUrl}
//                 width={500}
//                 height={400}
//               />
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//               <h2 className="text-lg font-medium text-gray-900 truncate">
//                 {product.title || 'Unnamed Product'}
//               </h2>
//               <p className="text-gray-600 text-sm mb-4">
//                 {product.description || 'No description available'}
//               </p>
//               <p className="text-lg font-bold text-gray-800">
//                 ${product.price || 'N/A'}
//               </p>
//             </div>

//             {/* Add to Cart */}
//             <div className="p-4 flex justify-end">
//               <Link
//                 href={`/product/${product._id}`}
//                 className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg text-gray-700 hover:bg-gray-200 hover:text-black transition"
//               >
//                 <FiShoppingCart />
//               </Link>
//             </div>

//             {/* Inventory Data */}
//             <div className="p-4">
//               <p>In Stock: {product.inventory?.inStock || 'N/A'}</p>
//               <p>Reserved: {product.inventory?.reserved || 'N/A'}</p>
//               <p>Status: {product.inventory?.status || 'N/A'}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Card;



// 'use client';
// import { Product } from "@/sanity.types";

// import Link from 'next/link';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';
// import React from 'react';
// import { urlFor } from '@/sanity/lib/image';

// const Card = ({ products }: { products: Product[] }) => {
//   if (!products || products.length === 0) {
//     return <p className="text-center py-8">No products found.</p>;
//   }

//   return (
//     <div
//       className={`grid ${
//         products.length === 1
//           ? 'grid-cols-1'
//           : products.length === 2
//           ? 'grid-cols-2'
//           : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
//       } gap-6 px-6 py-8`}
//     >
//       {products.map((product) => {
//         // Add validation for `product` and its properties
//         const imageUrl = product?.image?.asset?._ref
//           ? urlFor(product.image).url()
//           : '/placeholder-image.png';

//         return (
//           <div
//             key={product?._id || Math.random()}
//             className="border border-gray-300 rounded-lg overflow-hidden group text-sm"
//           >
//             <div className="border-b border-b-gray-300 overflow-hidden relative">
//               <Link href={`/product/${product?.slug?.current || '#'}`}>
//                 <Image
//                   src={imageUrl}
//                   alt={product?.title || 'Product Image'}
//                   width={500}
//                   height={500}
//                   loading="lazy"
//                   className={`w-full max-h-96 object-cover overflow-hidden transition-transform duration-500 ${
//                     product?.stock !== 0 && 'group-hover:scale-105'
//                   }`}
//                 />
//               </Link>
//               {product?.stock === 0 && (
//                 <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//                   <p className="text-lg font-bold text-white">Out of Stock</p>
//                 </div>
//               )}
//             </div>

//             <div className="p-4">
//               <h3 className="font-bold mb-2">{product?.title || 'Untitled Product'}</h3>
//               <p className="text-gray-600 mb-4">Status: {product?.status || 'N/A'}</p>
//               <p>In Stock: {product?.inventory?.inStock || 'N/A'}</p>
//               <p>Reserved: {product?.inventory?.reserved || 'N/A'}</p>
//             </div>

//             <div className="p-4 flex justify-end">
//               <Link
//                 href={`/product/${product?.slug?.current || '#'}`}
//                 className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg text-gray-700 hover:bg-gray-200 hover:text-black transition"
//               >
//                 <FiShoppingCart />
//                 Add to Cart
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Card;
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   originalPrice?: number;
//   isNew?: boolean;
//   isSale?: boolean;
// };
// const Card = ({ product }: { product: Product }) => {
//   if (!product) {
//     // Early return if product is undefined
//     return <div>Loading...</div>;
//   }

//   return (
//     <div
//       key={product.id}
//       id="product"
//       className="group relative rounded-lg bg-white"
//     >
//       <div className="relative aspect-square overflow-hidden rounded-lg">
//         {product?.isNew && (
//           <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
//             New
//           </Badge>
//         )}
//         {product?.isSale && (
//           <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
//             Sale
//           </Badge>
//         )}
//         <Link href={`/product/${product.id}`}>
//           <Image
//             src={product.image}
//             alt={product.title}
//             height={400}
//             width={400}
//             className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//             aria-label={`View details of ${product.title}`}
//           />
//         </Link>
//       </div>
//       <div className="mt-4 flex items-center justify-between">
//         <div>
//           <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
//           <div className="mt-1 flex items-center gap-2">
//             <span className="text-lg font-medium text-[#1C1B1F]">
//               ${product.price.toFixed(2)}
//             </span>
//             {product.originalPrice && (
//               <span className="text-sm text-gray-500 line-through">
//                 ${product.originalPrice.toFixed(2)}
//               </span>
//             )}
//           </div>
//         </div>
//         <button
//           className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
//           aria-label={`Add ${product.title} to cart`}
//         >
//           <ShoppingCart className="h-5 w-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;



'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { client } from '@/sanity/lib/client'; // Import your configured Sanity client

type Product = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  image: string;
  description?: string;
  inventory?: number;
  tags?: string[];
};

const Cards = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // GROQ Query for All Featured Products
  const query = `
    *[_type == "products" ] {
      _id,
      title,
      price,
      "priceWithoutDiscount": priceWithoutDiscount,
      "badge": badge,
      "image": image.asset->url,
      description,
      inventory,
      tags
    }
  `;

  // Fetch Products on Component Mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <span>
                <h1 className="mr-5 text-black font-bold text-3xl border-l-8 pl-3 ml-1">
                  FEATURED PRODUCTS
                </h1>
              </span>
            </div>
            <div className="container mx-auto px-4 py-20">
              <div className="grid grid-cols gap-6 sm:grid-cols-1 lg:grid-cols-4">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div key={product._id} className="group relative rounded-lg bg-white">
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        {product.badge && (
                          <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                            {product.badge}
                          </Badge>
                        )}
                        <Link href={`/product/${product._id}`}>
                          <Image
                            src={product.image}
                            alt={product.title}
                            height={400}
                            width={400}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            aria-label={`View details of ${product.title}`}
                          />
                        </Link>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-lg font-medium text-[#1C1B1F]">
                              ${product.price}
                            </span>
                            {product.priceWithoutDiscount && (
                              <span className="text-sm text-gray-500 line-through">
                                ${product.priceWithoutDiscount}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
                          aria-label={`Add ${product.title} to cart`}
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No featured products found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;



// "use client";

// import Link from "next/link";
// import { FiShoppingCart } from "react-icons/fi";
// import Image from "next/image";
// import React from "react";
// import { Product } from "@/sanity.types";
// import { urlFor } from "@/sanity/lib/image";
// import { LuStar } from "react-icons/lu";

// const ProductCard = ({ product }: { product: Product }) => {
//   return (
//     <div className="border border-gray-300 rounded-lg overflow-hidden group text-sm">
//       {/* Product Image Section */}
//       <div className="border-b border-b-gray-300 overflow-hidden relative">
//         {product?.image && (
//           <Link href={`/product/${product?.slug?.current}`}>
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product?.name || "Unnamed Product"}
//               width={500}
//               height={500}
//               loading="lazy"
//               className={`w-full max-h-96 object-cover transition-transform duration-500 ${
//                 product?.stock !== 0 && "group-hover:scale-105"
//               }`}
//             />
//           </Link>
//         )}
//         {product?.stock === 0 && (
//           <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//             <p className="text-lg font-bold text-white">Out of Stock</p>
//           </div>
//         )}
//         {product?.status && (
//           <div className="absolute left-1 top-1 z-10 flex flex-col items-center space-y-1 text-gray-500 px-2 py-1 group-hover:opacity-0 transition-opacity duration-300">
//             {product.status.split("").map((char, index) => (
//               <span key={index} className="font-semibold uppercase">
//                 {char}
//               </span>
//             ))}
//           </div>
//         )}
//         {product?.stock !== 0 && (
//           <div className="absolute bottom-0 left-0 w-full translate-y-12 group-hover:-translate-y-4 transition-transform duration-300">
//             <div className="flex justify-center items-center py-2 bg-gray-900 text-white rounded">
//               <p className="text-sm font-medium">Quick Add to Cart</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Product Details Section */}
//       <div className="p-5 flex flex-col gap-2">
//         <div className="flex items-center justify-between">
//           <p className="text-gray-500 font-medium">
//             {/* {product?.category || "Uncategorized"} */}
//           </p>
//           <div className="text-lightText flex items-center gap-1">
//             {Array.from({ length: 5 }).map((_, index) => {
//               const isLastStar = index === 4;
//               return (
//                 <LuStar
//                   fill={!isLastStar ? "#fca99b" : "transparent"}
//                   key={index}
//                   className={`${
//                     isLastStar ? "text-gray-500" : "text-lightOrange"
//                   }`}
//                 />
//               );
//             })}
//           </div>
//         </div>
//         <p className="text-base text-gray-600 tracking-wide font-semibold line-clamp-1 capitalize">
//           {product?.name || "Unnamed Product"}
//         </p>
//         <div className="flex items-center justify-between mt-2">
//           <p className="text-lg font-bold text-gray-800">
//             ${product?.price || "N/A"}
//           </p>
//           {product?.discount && (
//             <p className="text-sm text-red-500">
//               {product?.discount}% Off
//             </p>
//           )}
//         </div>
//         <div className="mt-4">
//           <button className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
//             <FiShoppingCart />
//             <span>Add to Cart</span>
//           </button>
//         </div>
//       </div>

//       {/* Inventory Details Section */}
//       <div className="p-4">
//         <p>In Stock: {product?.inventory?.inStock ?? "N/A"}</p>
//         <p>Reserved: {product?.inventory?.reserved ?? "N/A"}</p>
//         <p>Status: {product?.inventory?.status ?? "N/A"}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




// 'use client';

// import Link from 'next/link';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { groq } from 'next-sanity';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';

// const Card = () => {
//   const [products, setProducts] = useState<any[]>([]);

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts = await client.fetch(groq`*[_type == "product"]{
//       _id,
//       title,
//       price,
//       description,
//       image{
//         asset->{
//           _id,
//           url
//         }
//       },
//       category,
//       inventory{
//         inStock,
//         reserved,
//         status
//       }`);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Check if no products are available
//   if (products.length === 0) {
//     return <p className="text-center text-gray-500">No products available.</p>;
//   }

//   return (
//     <div
//       className={`grid ${
//         products.length === 1
//           ? 'grid-cols-1'
//           : products.length === 2
//           ? 'grid-cols-2'
//           : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
//       } gap-6 px-6 py-8`}
//     >
//       {products.map((product: any, index: number) => {
//         const imageUrl = product.image ? urlFor(product.image).url() : '/placeholder-image.png';

//         return (
//           <div
//             key={index}
//             className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-white group"
//           >
//             {/* Product Image */}
//             <div className="relative h-64">
//               <Image
//                 alt={product.name || 'Unnamed Product'}
//                 className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
//                 src={imageUrl}
//                 width={500}
//                 height={400}
//               />
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//               <h2 className="text-lg font-medium text-gray-900 truncate">
//                 {product.name || 'Unnamed Product'}
//               </h2>
//               <p className="text-gray-600 text-sm mb-4">
//                 {product.description || 'No description available'}
//               </p>
//               <p className="text-lg font-bold text-gray-800">${product.price || 'N/A'}</p>
//             </div>

//             {/* Add to Cart */}
//             <div className="p-4 flex justify-end">
//               <Link
//                 href={`/product/${product.slug?.current || ''}`}
//                 className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg text-gray-700 hover:bg-gray-200 hover:text-black transition"
//               >
                
//                 <FiShoppingCart />

//               </Link>
              
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Card;


// 'use client';

// import Link from 'next/link';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { groq } from 'next-sanity';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';

// const Card = () => {
//   const [products, setProducts] = useState<any[]>([]);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts = await client.fetch(groq`*[_type == "product"]{
//   _id,
//   title,
//   description,
//   price,
//   category,
//   image
// }
// `);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Check if no products are available
//   if (products.length === 0) {
//     return <p className="text-center text-gray-500">No products available.</p>;
//   }

//   // Function to handle image click
//   const handleImageClick = (imageUrl: string) => {
//     setSelectedImage(imageUrl);
//   };

//   // Function to close modal
//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div>
//       {/* Product Grid */}
//       <div
//         className={`grid ${
//           products.length === 1
//             ? 'grid-cols-1'
//             : products.length === 2
//             ? 'grid-cols-2'
//             : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
//         } gap-6 px-6 py-8`}
//       >
//         {products.map((product: any, index: number) => {
//           const imageUrl = product.image ? urlFor(product.image).url() : '/placeholder-image.png';

//           return (
//             <div
//               key={index}
//               className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-white group"
//             >
//               {/* Product Image */}
//               <div
//                 className="relative h-64 cursor-pointer"
//                 onClick={() => handleImageClick(imageUrl)}
//               >
//                 <Image
//                   alt={product.name || 'Unnamed Product'}
//                   className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
//                   src={imageUrl}
//                   width={500}
//                   height={400}
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="p-4">
//                 <h2 className="text-lg font-medium text-gray-900 truncate">
//                   {product.name || 'Unnamed Product'}
//                 </h2>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {product.description || 'No description available'}
//                 </p>
//                 <p className="text-lg font-bold text-gray-800">${product.price || 'N/A'}</p>
//               </div>

//               {/* Add to Cart */}
//               <div className="p-4 flex justify-end">
//                 <Link
//                   href={`/product/${product.slug?.current || ''}`}
//                   className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg text-gray-700 hover:bg-gray-200 hover:text-black transition"
//                 >
//                   <FiShoppingCart />
//                 </Link>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Modal for Image */}
//       {selectedImage && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-0 right-0 p-2 bg-white text-black rounded-full"
//             >
//               X
//             </button>
//             <Image
//               alt="Full Product Image"
//               src={selectedImage}
//               width={800}
//               height={600}
//               className="object-cover"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;
// "use client"
// import { useState } from 'react';
// import { GetServerSideProps } from 'next';
// import { client } from '@/sanity/lib/client'; // Adjust path as necessary
// import Image from 'next/image';
// import Link from 'next/link';
// import { FiShoppingCart } from 'react-icons/fi';

// const Card = ({ products }: any) => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   // Check if products is an array before using .map
//   if (!Array.isArray(products)) {
//     return <p>Loading products...</p>; // Or any fallback UI
//   }

//   // Function to handle image click
//   const handleImageClick = (imageUrl: string) => {
//     setSelectedImage(imageUrl);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div>
//       <h1>All Products</h1>

//       {/* Product Grid */}
//       <div
//         className={`grid ${
//           products.length === 1
//             ? 'grid-cols-1'
//             : products.length === 2
//             ? 'grid-cols-2'
//             : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
//         } gap-6 px-6 py-8`}
//       >
//         {products.length > 0 ? (
//           products.map((product: any, index: number) => {
//             const imageUrl = product.image
//               ? product.image.asset.url
//               : '/placeholder-image.png';

//             return (
//               <div
//                 key={index}
//                 className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-white group"
//               >
//                 {/* Product Image */}
//                 <div
//                   className="relative h-64 cursor-pointer"
//                   onClick={() => handleImageClick(imageUrl)}
//                 >
//                   <Image
//                     alt={product.title || 'Unnamed Product'}
//                     className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
//                     src={imageUrl}
//                     width={500}
//                     height={400}
//                   />
//                 </div>

//                 {/* Product Details */}
//                 <div className="p-4">
//                   <h2 className="text-lg font-medium text-gray-900 truncate">
//                     {product.title || 'Unnamed Product'}
//                   </h2>
//                   <p className="text-gray-600 text-sm mb-4">
//                     {product.description || 'No description available'}
//                   </p>
//                   <p className="text-lg font-bold text-gray-800">${product.price || 'N/A'}</p>
//                 </div>

//                 {/* Add to Cart */}
//                 <div className="p-4 flex justify-end">
//                   <Link
//                     href={`/product/${product._id}`}
//                     className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg text-gray-700 hover:bg-gray-200 hover:text-black transition"
//                   >
//                     <FiShoppingCart />
//                   </Link>
//                 </div>

//                 {/* Inventory Data */}
              //   <div className="inventory p-4">
              //     <p>In Stock: {product.inventory?.inStock}</p>
              //     <p>Reserved: {product.inventory?.reserved}</p>
              //     <p>Status: {product.inventory?.status}</p>
              //   </div>
              // </div>
//             );
//           })
//         ) : (
//           <p>No products available</p>
//         )}
//       </div>

//       {/* Modal for Image */}
//       {selectedImage && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-0 right-0 p-2 bg-white text-black rounded-full"
//             >
//               X
//             </button>
//             <Image
//               alt="Full Product Image"
//               src={selectedImage}
//               width={800}
//               height={600}
//               className="object-cover"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async () => {
  // const query = `
    // *[_type == "product"]{
    //   _id,
    //   title,
    //   price,
    //   description,
    //   image{
    //     asset->{
    //       _id,
    //       url
    //     }
    //   },
    //   category,
    //   inventory{
    //     inStock,
    //     reserved,
    //     status
    //   }
  //   }
  // `;

//   // Make sure the data returned is an array
//   const products = await client.fetch(query) || [];

//   return {
//     props: {
//       products, // If no data is fetched, it will default to an empty array
//     },
//   };
// };

// export default Card;
