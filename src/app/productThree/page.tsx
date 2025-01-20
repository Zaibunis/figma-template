'use client'

import Link from "next/link";
import Image from "next/image";
import { IoShareSocialOutline } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoHeartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { FaStar } from "react-icons/fa";

const SecThree = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(
          `*[_type=="products"] | order(_createdAt desc)[16..19]{
            _id,
            name,
            description,
            price,
            "imageUrl" : image.asset->url,
            category,
            discountPercent,
            "isNew": new,
            colors,
            sizes,
            rating
          }`
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        {loading ? (
          <div className="flex flex-col gap-4 items-center justify-center h-[80vh]">
            <p className="text-2xl font-bold tracking-wider text-blue-600">Loading Products...</p>
            <div className="w-32 h-32 rounded-full border-t border-blue-600 animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product: any) => (
              <div key={product._id} className="relative group">
                <a className="block relative h-[301px] w-full overflow-hidden">
                  <Image
                    alt={product.name}
                    className="object-cover object-center w-full h-full block"
                    src={product.imageUrl}
                    width={285}
                    height={301}
                  />
                </a>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
  <h2 className="text-white text-lg font-bold mb-2">{product.name}</h2>
  <p className="text-white text-sm text-center mb-4 line-clamp-2">
    {product.description}
  </p>
  <Link href={`/productThree/${product._id}`}>
    <button className="bg-[#B88E2F] text-black px-6 py-2 font-semibold hover:bg-[#A67C2A] transition-colors duration-300">
      View Detail
    </button>
  </Link>
 
</div>
                <div className=" p-4">
                  <h2 className="text-gray-900  ml-4 title-font text-lg font-bold">{product.name}</h2>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <div className="flex items-center mt-1">
  {[...Array(5)].map((_, i) => (
    <FaStar
      key={i}
      className="h-4 w-4 text-yellow-500"
    />
  ))}
</div>
                  <p className="mt-1 flex items-center gap-2 text-black font-semibold">
                    ${product.price}
                    {product.discountPercent && (
                      <span className="text-gray-500 line-through">${(product.price / (1 - product.discountPercent / 100)).toFixed(2)}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SecThree;