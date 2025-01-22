import {client} from '@/sanity/lib/client'

export const fetchProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    "image": image.asset->url
  }`;
  const products = await client.fetch(query);
  return products;
};
