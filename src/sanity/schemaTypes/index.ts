// import { type SchemaTypeDefinition } from 'sanity'
// import { productSchema } from '../schemas/product'
// import { categorySchema } from '../schemas/catagory';

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [productSchema, categorySchema],
// }// sanity/schemaTypes/index.ts


import { type SchemaTypeDefinition } from 'sanity';
import productSchema from "../schemas/productType"// Ensure correct export in product.ts
import categorySchema from '../schemas/catagoryType'; // Fixed typo here (category instead of catagory)

import cartSchema from '../schemas/blockContentType';
import userSchema from '../schemas/saleType';
import orderSchema from '../schemas/orderType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productSchema,
    categorySchema,
   
    cartSchema,
    userSchema,
    orderSchema,
  ],
};
