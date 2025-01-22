export const getAllProductsQuery = `*[_type == "product"]`;
export const getProductByIdQuery = (id: string) =>
  `*[_type == "product" && _id == "${id}"]`;
