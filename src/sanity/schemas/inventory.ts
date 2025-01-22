// sanity/schemas/inventory.ts

import { SchemaTypeDefinition } from '@sanity/types';

export interface Inventory {
  _id: string;
  inStock: number;
  reserved: number;
  status: 'inStock' | 'outOfStock' | 'lowStock';
}

const inventorySchema: SchemaTypeDefinition = {
  name: 'inventory',
  title: 'Inventory',
  type: 'document',
  fields: [
    { name: 'inStock', title: 'In Stock', type: 'number' },
    { name: 'reserved', title: 'Reserved', type: 'number' },
    {
      name: 'status',
      title: 'Inventory Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'inStock' },
          { title: 'Out of Stock', value: 'outOfStock' },
          { title: 'Low Stock', value: 'lowStock' },
        ],
        layout: 'radio',
      },
    },
  ],
};

export default inventorySchema;
