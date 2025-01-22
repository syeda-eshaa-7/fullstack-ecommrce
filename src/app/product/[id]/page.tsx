


// "use client"; // Ensure this is a client-side component

// import React, { useContext } from 'react';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client';
// import { CartContext } from "@/app/context/CartContaxt"; // Corrected the import path
// import Featured from '@/app/components/Featured';
// import { urlFor } from '@/sanity/lib/image';

// type Product = {
//   _id: string;
//   title: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   description: string;
//   image: string;
//   inventory?: number;
//   tags?: string[];
// };

// const ProductPage = ({ params }: { params: { id: string } }) => {
//   const { id } = React.use(params); // Unwrap the params using React.use()
//   const { cartItems, addProduct, qty, decQty, incQty, addToWishlist, wishlistItems }: any = useContext(CartContext);

//   // GROQ Query to fetch a specific product by ID
//   const query = `
//     *[_type == "products" && _id == $id][0] {
//       _id,
//       title,
//       "image": image.asset->url,
//       price,
//       priceWithoutDiscount,
//       description,
//       inventory,
//       tags
//     }
//   `;

//   const [product, setProduct] = React.useState<Product | null>(null);

//   React.useEffect(() => {
//     const fetchProduct = async () => {
//       const productData: Product = await client.fetch(query, { id });
//       setProduct(productData);
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return (
//       <div className="container mx-auto text-center py-20">
//         <h1 className="text-2xl font-bold text-gray-600">Product Not Found</h1>
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     addProduct(product, qty); // Handle adding product to cart
//   };

//   const handleAddToWishlist = () => {
//     addToWishlist(product); // Handle adding product to wishlist
//   };

//   const isProductInWishlist = wishlistItems.some((item: Product) => item._id === product._id);

//   return (
//     <div className="container mx-auto p-6">
//       {/* Main Product Display */}
//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="flex-1">
//           <Image
//             src={product.image ? urlFor(product.image).width(400).url() : '/placeholder-image.png'}
//             alt={product.title}
//             width={400}
//             height={400}
//             className="rounded-lg"
//           />
//         </div>
//         <div className="flex-1 space-y-4">
//           <h2 className="text-3xl font-bold">{product.title}</h2>
//           <p className="text-xl text-green-600">${product.price}</p>
//           {product.priceWithoutDiscount && (
//             <p className="text-gray-600 line-through">
//               ${product.priceWithoutDiscount}
//             </p>
//           )}
//           <p className="text-gray-600">{product.description}</p>

//           <div className="flex space-x-4 mt-4">
//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAddToCart}
//               className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               Add To Cart
//             </button>

//             {/* Add to Wishlist Button */}
//             <button
//               onClick={handleAddToWishlist}
//               className={`bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600 ${isProductInWishlist ? 'bg-gray-500 cursor-not-allowed' : ''}`}
//               disabled={isProductInWishlist}
//             >
//               {isProductInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Featured Products Section (if applicable) */}
//       <div className="mt-12">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-2xl font-bold">Featured Products</h3>
//           <a href="#" className="text-blue-500 hover:underline">
//             View all
//           </a>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//           {/* Map over featured products */}
//         </div>
//       </div>
//       <Featured />
//     </div>
//   );
// };

// export default ProductPage;


"use client"; // Ensure this is a client-side component

import React, { useContext } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { CartContext } from "@/app/context/CartContaxt"; // Corrected the import path
import Featured from '@/app/components/Featured';
import { urlFor } from '@/sanity/lib/image';

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
  const { id } :any= params; // Access the id directly from params
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
    addProduct(product, qty); // Handle adding product to cart
  };

  const handleAddToWishlist = () => {
    addToWishlist(product); // Handle adding product to wishlist
  };

  const isProductInWishlist = wishlistItems.some((item: Product) => item._id === product._id);

  return (
    <div className="container mx-auto p-6">
      {/* Main Product Display */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Image
            src={product.image ? urlFor(product.image).width(400).url() : '/placeholder-image.png'}
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
            <p className="text-gray-600 line-through">
              ${product.priceWithoutDiscount}
            </p>
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
              className={`bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600 ${isProductInWishlist ? 'bg-gray-500 cursor-not-allowed' : ''}`}
              disabled={isProductInWishlist}
            >
              {isProductInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
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


// "use client"; // Ensure this is a client-side component

// import React, { useContext } from 'react';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client';
// import { CartContext } from "@/app/context/CartContaxt"; // Corrected the import path
// import Featured from '@/app/components/Featured';
// import { urlFor } from '@/sanity/lib/image';

// type Product = {
//   _id: string;
//   title: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   description: string;
//   image: string;
//   inventory?: number;
//   tags?: string[];
// };

// const ProductPage = ({ params }: { params: { id: string } }) => {
//   const { id } = React.use(params); // Unwrap the params object
//   const { cartItems, addProduct, qty, decQty, incQty ,wishlistItems}: any = useContext(CartContext); // Removed wishlist functions

//   // GROQ Query to fetch a specific product by ID
//   const query = `
//     *[_type == "products" && _id == $id][0] {
//       _id,
//       title,
//       "image": image.asset->url,
//       price,
//       priceWithoutDiscount,
//       description,
//       inventory,
//       tags
//     }
//   `;

//   const [product, setProduct] = React.useState<Product | null>(null);

//   React.useEffect(() => {
//     const fetchProduct = async () => {
//       const productData: Product = await client.fetch(query, { id });
//       setProduct(productData);
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return (
//       <div className="container mx-auto text-center py-20">
//         <h1 className="text-2xl font-bold text-gray-600">Product Not Found</h1>
//       </div>
//     );
//   }
//   const isInWishlist = wishlistItems.some((item: any) => item._id === product._id);

//   const handleAddToCart = () => {
//     addProduct(product, qty); // Handle adding product to cart
//   };
//   const handleWishlistToggle = () => {
//     addProduct(product, qty); // Handle adding product to cart
//   };


//   return (
//     <div className="container mx-auto p-6">
//       {/* Main Product Display */}
//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="flex-1">
//           <Image
//             // src={product.image}
//             src={product.image ? urlFor(product.image).width(400).url() : '/placeholder-image.png'}
//             alt={product.title}
//             width={400}
//             height={400}
//             className="rounded-lg"
//           />
//         </div>
//         <div className="flex-1 space-y-4">
//           <h2 className="text-3xl font-bold">{product.title}</h2>
//           <p className="text-xl text-green-600">${product.price}</p>
//           {product.priceWithoutDiscount && (
//             <p className="text-gray-600 line-through">
//               ${product.priceWithoutDiscount}
//             </p>
//           )}
//           <p className="text-gray-600">{product.description}</p>

//           <div className="flex space-x-4 mt-4">
//             {/* Add to Cart Button */}
//             {/* <button
//               onClick={handleAddToCart}
//               className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               Add To Cart
//             </button> */}
//              <button
//               onClick={handleAddToCart}
//               className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               Add To Cart
//             </button>

//             {/* Add to Wishlist Button */}
//             <button
//               onClick={handleWishlistToggle}
//               className={`${
//                 isInWishlist ? 'bg-red-500' : 'bg-blue-500'
//               } text-white py-2 px-4 rounded hover:bg-opacity-80 transition-colors`}
//             >
//               {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Featured Products Section (if applicable) */}
//       <div className="mt-12">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-2xl font-bold">Featured Products</h3>
//           <a href="#" className="text-blue-500 hover:underline">
//             View all
//           </a>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//           {/* Map over featured products */}
//         </div>
//       </div>
//       <Featured />
//     </div>
//   );
// };

// export default ProductPage;


// Ensure this file is correctly named as `page.tsx` inside the `product/[id]` folder




// // "use client";

// // import React, { useContext, useEffect, useState } from "react";
// // import Image from "next/image";
// // import { useParams } from "next/navigation";
// // import { groq } from "next-sanity";
// // import { client } from "@/sanity/lib/client";
// // import { urlFor } from "@/sanity/lib/image";
// import { CartContext } from "@/app/context/CartContaxt";
// // import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// // const Page = () => {
// //   const { slug }: any = useParams();
// //   const [index,setIndex] = useState(0);
    // const { cartItems, addProduct, qty, decQty, incQty}:any = useContext(CartContext); // Valid use of hooks
// //   const [product, setProduct] = useState<any>(null);
// //   console.log(cartItems);
  

// //   useEffect(() => {
// //     // Fetch product data inside useEffect
// //     const fetchProduct = async () => {
// //       const products = await client.fetch(groq`*[_type == "product"]`);
// //       const selectedProduct = products.find((product: any) => product.slug.current === slug);
// //       setProduct(selectedProduct);
// //     };

// //     fetchProduct();
// //   }, [slug]);

// //   if (!product) {
// //     return <div>Loading...</div>; // Show a loading state while fetching data
// //   }

  // const handleAddToCart = () => {
  //   addProduct(product , qty); // Handle adding product to cart
  // };

// //   return (
// //     <div className="container mx-auto p-6">
// //       {/* Main Product Display */}
// //       <div className="flex flex-col md:flex-row gap-6">
// //         <div className="flex-1">
// //           <Image
// //              loader={()=>urlFor(product.images[index]).url()}
// //             alt={product.name || 'Unnamed Product'} // Use product name for alt description
// //             src={urlFor(product.images[index]).url()}
// //             height={400}
// //             width={400}
// //           />
// //         </div>
// //         <div className="flex-1 space-y-4">
// //           <h2 className="text-3xl font-bold">{product.name || 'Unnamed Product'}</h2>
// //           <p className="text-xl text-green-600">{product.price ? `${product.price} USD` : 'Price not available'}</p>
// //           <p className="text-gray-600">
// //             {product.description || "Description not available for this product."}
// //           </p>
// //           <div className='flex gap-2 items-center'>
// //                         <h3>Quantity</h3>
// //                         <p className='quantity-desc flex items-center border-black'>
// //                             <span className='minus'
// //                                 onClick={decQty}
// //                             >
// //                                 <AiOutlineMinus />
// //                             </span>
// //                             <span className='num'>{qty}</span>
// //                             <span className='plus' 
// //                                 onClick={incQty}
// //                             >
// //                                 <AiOutlinePlus />
// //                             </span>

// //                         </p>
// //                 </div>
// //           <button
// //             onClick={handleAddToCart}
// //             className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-gray-600"
// //           >
// //             Add To Cart
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Page;



// "use client";

// import React, { useContext, useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { CartContext } from "@/app/context/CartContaxt";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// const Page = () => {
//   const { slug }: any = useParams();
//   const [index, setIndex] = useState(0);
//   const [localQty, setLocalQty] = useState(1);
//   const [product, setProduct] = useState<any>(null);
//   const { addProduct }: any = useContext(CartContext);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const products = await client.fetch(groq`*[_type == "product"]`);
//         const selectedProduct = products.find(
//           (product: any) => product.slug.current === slug
//         );
//         setProduct(selectedProduct);
//       } catch (error) {
//         console.error("Failed to fetch product:", error);
//       }
//     };

//     fetchProduct();
//   }, [slug]);

//   if (!product) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-lg font-medium text-gray-500">Loading product...</p>
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     addProduct(product, localQty);
//   };

//   const handleIncrement = () => setLocalQty(localQty + 1);
//   const handleDecrement = () => {
//     if (localQty > 1) setLocalQty(localQty - 1);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="flex-1">
//           {product.images && product.images[index] ? (
//             <Image
//               loader={() => urlFor(product.images[index]).url()}
//               alt={product.name || "Unnamed Product"}
//               src={urlFor(product.images[index]).url()}
//               height={400}
//               width={400}
//             />
//           ) : (
//             <div className="w-[400px] h-[400px] bg-gray-200 flex items-center justify-center">
//               <p className="text-gray-500">No Image Available</p>
//             </div>
//           )}
//           {product.images && product.images.length > 1 && (
//             <div className="flex space-x-2 mt-4">
//               {product.images.map((_:any, i:any) => (
//                 <button
//                   key={i}
//                   className={`w-10 h-10 border ${
//                     i === index ? "border-black" : "border-gray-300"
//                   }`}
//                   onClick={() => setIndex(i)}
//                 >
//                   <Image
//                     loader={() => urlFor(product.images[i]).url()}
//                     src={urlFor(product.images[i]).url()}
//                     alt={`Thumbnail ${i}`}
//                     width={50}
//                     height={50}
//                   />
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="flex-1 space-y-4">
//           <h2 className="text-3xl font-bold">{product.name || "Unnamed Product"}</h2>
//           <p className="text-xl text-green-600">
//             {product.price ? `${product.price} USD` : "Price not available"}
//           </p>
//           <p className="text-gray-600">
//             {product.description || "Description not available for this product."}
//           </p>
//           <div className="flex gap-2 items-center">
//             <h3>Quantity</h3>
//             <div className="quantity-desc flex items-center border-black">
//               <button className="minus" onClick={handleDecrement}>
//                 <AiOutlineMinus />
//               </button>
//               <span className="num">{localQty}</span>
//               <button className="plus" onClick={handleIncrement}>
//                 <AiOutlinePlus />
//               </button>
//             </div>
//           </div>
//           <button
//             onClick={handleAddToCart}
//             className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-gray-600"
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );}

//   export default Page


// "use client";

// import React, { useContext, useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// import { CartContext } from "@/app/context/CartContaxt";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// const Page = () => {
//   const { slug }: any = useParams();
//   const [index, setIndex] = useState(0);
//   const [localQty, setLocalQty] = useState(1);
//   const [product, setProduct] = useState<any>(null);
//   const { addProduct }: any = useContext(CartContext);

//   useEffect(() => {
//     if (!slug) return; // Ensure slug is available

//     const fetchProduct = async () => {
//       try {
        // const selectedProduct = await client.fetch(
        //   groq`*[_type == "product" && slug.current == $slug][0]{
        //     name,
        //     price,
        //     description,
        //     images
        //   }`,
//           { slug }
          
//         );

//         console.log("Selected product:", selectedProduct);
// setProduct(selectedProduct);

//         setProduct(selectedProduct);
//       } catch (error) {
//         console.error("Failed to fetch product:", error);
//       }
//     };

//     fetchProduct();
//   }, [slug]);

//   if (!product) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-lg font-medium text-gray-500">Loading product...</p>
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     addProduct(product, localQty);
//   };

//   const handleIncrement = () => setLocalQty(localQty + 1);
//   const handleDecrement = () => {
//     if (localQty > 1) setLocalQty(localQty - 1);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="flex-1">
//           {product.images && product.images[index] ? (
//             <Image
//               loader={() => urlFor(product.images[index]).url()}
//               alt={product.name || "Unnamed Product"}
//               src={urlFor(product.images[index]).url()}
//               height={400}
//               width={400}
//             />
//           ) : (
//             <div className="w-[400px] h-[400px] bg-gray-200 flex items-center justify-center">
//               <p className="text-gray-500">No Image Available</p>
//             </div>
//           )}
//           {product.images && product.images.length > 1 && (
//             <div className="flex space-x-2 mt-4">
//               {product.images.map((_: any, i: any) => (
//                 <button
//                   key={i}
//                   className={`w-10 h-10 border ${
//                     i === index ? "border-black" : "border-gray-300"
//                   }`}
//                   onClick={() => setIndex(i)}
//                 >
//                   <Image
//                     loader={() => urlFor(product.images[i]).url()}
//                     src={urlFor(product.images[i]).url()}
//                     alt={`Thumbnail ${i}`}
//                     width={50}
//                     height={50}
//                   />
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="flex-1 space-y-4">
//           <h2 className="text-3xl font-bold">{product.name || "Unnamed Product"}</h2>
//           <p className="text-xl text-green-600">
//             {product.price ? `${product.price} USD` : "Price not available"}
//           </p>
//           <p className="text-gray-600">
//             {product.description || "Description not available for this product."}
//           </p>
//           <div className="flex gap-2 items-center">
//             <h3>Quantity</h3>
//             <div className="quantity-desc flex items-center border-black">
//               <button className="minus" onClick={handleDecrement}>
//                 <AiOutlineMinus />
//               </button>
//               <span className="num">{localQty}</span>
//               <button className="plus" onClick={handleIncrement}>
//                 <AiOutlinePlus />
//               </button>
//             </div>
//           </div>
//           <button
//             onClick={handleAddToCart}
//             className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-gray-600"
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
// "use client";

// import React, { useContext, useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";

// import { CartContext } from "@/app/context/CartContaxt";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// const Page = () => {
//   const { slug }: any = useParams();
//   const [index, setIndex] = useState(0);
//   const [localQty, setLocalQty] = useState(1);
//   const [product, setProduct] = useState<any>(null);
//   const { addProduct }: any = useContext(CartContext);

//   useEffect(() => {
//     if (!slug) return; // Ensure slug is available before fetching product

//     const fetchProduct = async () => {
//       try {
//         const selectedProduct = await client.fetch(
//           groq`*[_type == "product" && slug.current == $slug][0]{
//             name,
//             price,
//             description,
//             images
//           }`,
//           { slug }
//         );

//         console.log("Selected product:", selectedProduct);
//         setProduct(selectedProduct); // Update state with fetched product
//       } catch (error) {
//         console.error("Failed to fetch product:", error);
//       }
//     };

//     fetchProduct();
//   }, [slug]);

//   // Ensure product and images are available before rendering
 

//   if (!product.name || !product.images) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-lg font-medium text-gray-500">Product data is incomplete.</p>
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     addProduct(product, localQty);
//   };

//   const handleIncrement = () => setLocalQty(localQty + 1);
//   const handleDecrement = () => {
//     if (localQty > 1) setLocalQty(localQty - 1);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="flex-1">
//           {/* Check if image is available */}
//           {product.images[index] ? (
//             <Image
//               alt={product.name || "Unnamed Product"}
//               src={product.images[index]?.url || ""}
//               height={400}
//               width={400}
//             />
//           ) : (
//             <div className="w-[400px] h-[400px] bg-gray-200 flex items-center justify-center">
//               <p className="text-gray-500">No Image Available</p>
//             </div>
//           )}

//           {/* Display thumbnails if there are multiple images */}
//           {product.images.length > 1 && (
//             <div className="flex space-x-2 mt-4">
//               {product.images.map((image: any, i: number) => (
//                 <button
//                   key={i}
//                   className={`w-10 h-10 border ${
//                     i === index ? "border-black" : "border-gray-300"
//                   }`}
//                   onClick={() => setIndex(i)}
//                 >
//                   <Image
//                     src={image?.url || ""}
//                     alt={`Thumbnail ${i}`}
//                     width={50}
//                     height={50}
//                   />
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="flex-1 space-y-4">
//           <h2 className="text-3xl font-bold">{product.name || "Unnamed Product"}</h2>
//           <p className="text-xl text-green-600">
//             {product.price ? `${product.price} USD` : "Price not available"}
//           </p>
//           <p className="text-gray-600">
//             {product.description || "Description not available for this product."}
//           </p>
//           <div className="flex gap-2 items-center">
//             <h3>Quantity</h3>
//             <div className="quantity-desc flex items-center border-black">
//               <button className="minus" onClick={handleDecrement}>
//                 <AiOutlineMinus />
//               </button>
//               <span className="num">{localQty}</span>
//               <button className="plus" onClick={handleIncrement}>
//                 <AiOutlinePlus />
//               </button>
//             </div>
//           </div>
//           <button
//             onClick={handleAddToCart}
//             className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-gray-600"
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;


// src/app/product/[slug]/page.tsx
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';

// const ProductPage = () => {
//   const [product, setProduct] = useState<any>(null);
//   const router = useRouter();
//   const { slug } = router.query;

//   useEffect(() => {
//     if (slug) {
//       const fetchProduct = async () => {
//         try {
//           const productData = await client.fetch(
//             `*[_type == "products" && slug.current == $slug][0]{
//               _id,
//               title,
//               price,
//               "image": image.asset->url,
//               description,
//               inventory,
//               tags
//             }`,
//             { slug }
//           );
//           setProduct(productData);
//         } catch (error) {
//           console.error('Error fetching product:', error);
//         }
//       };
//       fetchProduct();
//     }
//   }, [slug]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold">{product.title}</h1>
//       <div className="flex flex-col md:flex-row">
//         <div className="md:w-1/2">
//           <Image
//             src={product.image}
//             alt={product.title}
//             width={400}
//             height={400}
//             className="w-full object-cover"
//           />
//         </div>
//         <div className="md:w-1/2 mt-6 md:mt-0">
//           <p>{product.description}</p>
//           <p className="text-lg font-bold">${product.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


// import React from 'react';
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';

// type Product = {
//   title: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   badge?: string;
//   image: string;
//   description?: string;
//   inventory?: number;
//   tags?: string[];
// };

// type ProductPageProps = {
//   product: Product | null;
// };

// const ProductPage = async({ params }: { params: { slug: string } }) => {
//   const { slug } = params;
//   console.log('Fetching product with slug:', slug); // Log the slug to debug

//   // GROQ Query for a single product
//   const query = `
//     *[_type == "products" && slug.current == $slug][0] {
//       title,
//       price,
//       "priceWithoutDiscount": priceWithoutDiscount,
//       "badge": badge,
//       "image": image.asset->url,
//       description,
//       inventory,
//       tags
//     }
//   `;

//   try {
//     const product = await client.fetch(query, { slug });

//     if (!product) {
//       return <p className="text-center text-gray-500">Product not found</p>;
//     }

//     return (
//       <div className="container mx-auto px-4 py-10">
//         <div className="flex flex-wrap">
//           <div className="w-full md:w-1/2">
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={500}
//               height={500}
//               className="rounded-lg object-cover"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-6">
//             <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
//             <p className="mt-2 text-lg text-gray-600">${product.price}</p>
//             {product.priceWithoutDiscount && (
//               <p className="text-sm text-gray-500 line-through">
//                 ${product.priceWithoutDiscount}
//               </p>
//             )}
//             <p className="mt-4 text-gray-700">{product.description}</p>
//             {product.badge && (
//               <div className="mt-2 inline-block bg-emerald-500 text-white text-sm px-3 py-1 rounded">
//                 {product.badge}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     return <p className="text-center text-gray-500">Product not found</p>;
//   }
// };

// export default ProductPage;
