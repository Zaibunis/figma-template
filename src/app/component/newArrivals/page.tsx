'use client'

import Image from "next/image";
import Link from "next/link";
export default function NewArrivals() {

  const products = [
    {
      id: 1,
      img: "/Frame 32.png",
      title: "T-shirt with Tape Details",
      rating: 4.4,
      price: "$120",
      description: "High-quality fabric with modern tape details.",
    },
    {
      id: 2,
      img: "/Frame 33 (5).png",
      title: "Skinny Fit Jeans",
      rating: 3.5,
      price: "$240",
      originalPrice: "$260",
      discount: "-20%",
      description: "Stylish and durable skinny-fit denim.",
    },
    {
      id: 3,
      img: "/Frame 34.png",
      title: "Checkered Shirt",
      rating: 4.4,
      price: "$180",
      description: "Classic checkered shirt perfect for casual wear.",
    },
    {
      id: 4,
      img: "/Frame 38.png",
      title: "Sleeve Striped T-shirt",
      rating: 3.5,
      price: "$130",
      originalPrice: "$160",
      discount: "-30%",
      description: "Comfortable striped t-shirt with sleek design.",
    },
  ];
  
  return (
   
    <section className="py-10 bg-white">
      {/* Header */}
      <div className="text-center mb-8 relative">
        <h2 className="text-3xl font-extrabold text-black">NEW ARRIVALS</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8">
        {products.map((product) => (
          <div key={product.id} className="relative group text-center">
            <Image
              src={product.img}
              alt={product.title}
              width={200}
              height={200}
              className="mx-auto rounded-lg shadow"
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
        <Link href={`/component/newArrivals/${product.id}`}>
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