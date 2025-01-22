'use client'; // Client Component

import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const ProductsClient = ({ products }: { products: any[] }) => {
  return (
    <div className="bg-[#f8f8f8] w-full py-12 mt-[125px]">
      <div className="container">
        <div className="py-4">
          <h1 className="text-3xl font-bold">Best Selling Products</h1>
          <h2>Enjoy Up To 50%</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6">
          {products.map((product: any) => (
            <div key={product._id} className="p-4 bg-white shadow rounded">
              <Image
                src={urlFor(product.image && product.image[0]).url()}
                alt={product.name || 'Unnamed Product'}
                height={200}
                width={300}
                className="rounded"
              />
              <h3 className="mt-2 text-lg font-medium">{product.name || 'Unnamed Product'}</h3>
              <p className="text-gray-500">${product.price || 'N/A'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsClient;
