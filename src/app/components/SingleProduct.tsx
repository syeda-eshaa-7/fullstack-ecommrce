import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: "$20",
    image: "/chiar3.png", // Ensure this file is in the public folder
  },
  {
    id: 2,
    name: "Modern Chair",
    price: "$25",
    image: "/chiar1.png", // Ensure this file is in the public folder
  },
  {
    id: 3,
    name: "Classic Armchair",
    price: "$30",
    image: "/3.jpg", // Ensure this file is in the public folder
  },
  {
    id: 4,
    name: "Orange Chair",
    price: "$18",
    image: "/2.jpg", // Ensure this file is in the public folder
  },
  {
    id: 5,
    name: "Comfort Chair",
    price: "$40",
    image: "/1.jpg", // Ensure this file is in the public folder
  },
];

export default function SingleProduct() {
  const mainProduct = products[0]; // Set the main product to display (first product for this example)

  return (
    <div className="container mx-auto p-6">
      {/* Main Product Display */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {/* Ensure main product image path is correct */}
          <Image
            src={mainProduct.image}
            alt={mainProduct.name}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold">{mainProduct.name}</h2>
          <p className="text-xl text-green-600">{mainProduct.price} USD</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <button className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Featured Products</h3>
          <a href="#" className="text-blue-500 hover:underline">
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 p-4 rounded-lg text-center shadow hover:shadow-lg"
            >
              {/* Ensure product image path is correct */}
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="mx-auto mb-4 rounded"
              />
              <h4 className="text-sm font-semibold">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
