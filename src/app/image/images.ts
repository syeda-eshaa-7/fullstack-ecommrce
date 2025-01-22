export interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  seller: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Library Stool Chair",
    image: "/chair.jpg", // Use the image from your `/public` folder
    price: "$20.00 USD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    seller: "Zaheer Ali",
  },
  {
    id: 2,
    title: "Modern Office Chair",
    image: "/office-chair.jpg", // Use the image from your `/public` folder
    price: "$40.00 USD",
    description:
      "An ergonomic chair with lumbar support, perfect for long working hours.",
    seller: "Ali Khan",
  },
];
