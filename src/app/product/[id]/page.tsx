import { sanityFetch } from "../../../sanity/lib/fetch";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const placeholderImage = "https://via.placeholder.com/600";

// Dynamic Route Component
const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Sanity query to fetch product details by ID
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url
  }`;

  let product: Product | null = null;

  try {
    product = await sanityFetch({ query, params: { id } });
  } catch (error) {
    console.error("Failed to fetch product details:", error);
  }

  // If product is not found, display an error message
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-center text-red-400 text-2xl font-semibold">
          Product not found
        </p>
      </div>
    );
  }

  // Render the product details
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <img
          src={product.imageUrl || placeholderImage}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-6">{product.name}</h1>
        <p className="text-xl text-gray-600 mt-4">{product.description}</p>
        <p className="text-2xl font-bold text-gray-800 mt-6">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
