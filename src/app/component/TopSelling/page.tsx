import Image from "next/image";
import Link from "next/link";
export default function TopSelling() {

  const products = [
    {
      id: 1,
      img: "/Frame 32 (2).png",
      title: "Vertical Striped Shirt",
      rating: 5.0,
      price: "$212",
      originalPrice: "$232",
      discount: "-20%",
      description: "Stylish and comfortable vertical striped shirt.",
    },
    {
      id: 2,
      img: "/Frame 33 (6).png",
      title: "Courage Graphic T-shirt",
      rating: 4.0,
      price: "$145",
      description: "Bold graphic design on a soft fabric t-shirt.",
    },
    {
      id: 3,
      img: "/Frame 34 (1).png",
      title: "Loose Fit Bermuda Shorts",
      rating: 3.0,
      price: "$80",
      description: "Perfect for summer, loose and breathable.",
    },
    {
      id: 4,
      img: "/Frame 38 (1).png",
      title: "Faded Skinny Jeans",
      rating: 4.5,
      price: "$210",
      description: "Trendy faded jeans with a modern fit.",
    },
  ];
  

  return (
    <section className="py-10 bg-white">
    {/* Header */}
    <div className="text-center mb-8 relative">
      <h2 className="text-3xl font-extrabold text-black">TOP SELLING</h2>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group text-center bg-white rounded-lg shadow overflow-hidden"
        >
          <Image
            src={product.img}
            alt={product.title}
            width={200}
            height={200}
            className="mx-auto"
          />
          <p className="mt-4 font-bold text-lg text-black">{product.title}</p>
          <div className="text-yellow-400 text-sm my-1">
            {"★".repeat(Math.floor(product.rating)) +
              "☆".repeat(5 - Math.floor(product.rating))}{" "}
            <span className="text-black text-sm">{product.rating}/</span>
            <span className="text-gray-500">5</span>
          </div>
          {product.discount ? (
            <div className="flex justify-center gap-2 text-gray-500">
              <span className="font-bold text-black">{product.price}</span>
              <span className="line-through">{product.originalPrice}</span>
              <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
                {product.discount}
              </span>
            </div>
          ) : (
            <p className="font-bold text-black">{product.price}</p>
          )}

         {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white p-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <h3 className="text-lg font-bold mb-2 text-center">{product.title}</h3>
        <p className="text-sm mb-4 text-center">{product.description}</p>
        <Link href={`/component/TopSelling/${product.id}`}>
          <button className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-yellow-400">
            View Details
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>


      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-2 border w-[218px] h-[52px] border-gray-400 rounded-full text-black font-semibold hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>

      {/* Bottom Border */}
      <div className="border-b border-gray-300 mt-10 mx-4 md:mx-8"></div>

    </section>
  );
}