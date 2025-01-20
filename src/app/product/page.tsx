// 'use client';

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { sanityFetch } from "../../sanity/lib/fetch";
// import { allProductsQuery } from "../api/query";

// type Product = {
//   slug_id: any;
//   _id: string;

//   slug: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// };

// const placeholderImage = "https://via.placeholder.com/300";

// const Main: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [cartModelVisibility, setCartModelVisibility] = useState<boolean>(false);
//   const [cart, setCart] = useState<any[]>([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }

//     const fetchData = async () => {
//       try {
//         const fetchedProducts = await sanityFetch({ query: allProductsQuery });
//         setProducts(fetchedProducts);
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAddToCart = (item: Product) => {
//     const updatedCart = [
//       ...cart,
//       { ...item, images: item.imageUrl || placeholderImage, quantity: 1 },
//     ];
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartModelVisibility(true);
//   };

//   const renderCartItems = () => {
//     return cart.map((item) => (
//       <div key={item._id} className="flex items-center gap-4 mb-4">
//         <img
//           src={item.images || placeholderImage}
//           alt={item.name || "Product image"}
//           className="w-16 h-16 object-cover rounded-lg"
//         />
//         <div className="flex-1">
//           <h4 className="text-lg font-medium text-gray-800">{item.name}</h4>
//           <p className="text-sm text-gray-600">{item.description}</p>
//         </div>
//         <span className="text-gray-800 font-bold">{item.price} USD</span>
//       </div>
//     ));
//   };

//   const closeModel = () => {
//     setCartModelVisibility(false);
//   };

//   return (
//     <div className="min-h-screen bg-white px-4 sm:px-6 py-8">
      

//       {loading ? (
//         <p className="text-center text-yellow-400">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {products.slice(0, 4).map((product) => (
//             <div
//               key={product._id}
//               className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300"
//             >
//               <div className="relative w-full h-56 sm:h-64">
//                 {/* Link to the product's slug page */}
//                 <Link href={`/product/${product.slug}`} >
//                 <img
//                   src={product.imageUrl || placeholderImage}
//                   alt={product.name || "Product image"}
//                   className="w-full h-full object-cover rounded-t-lg"
//                 />
//                 </Link>
//               </div>

//               <div className="p-4">
               
//                   <h2 className="text-lg font-semibold text-gray-800 truncate cursor-pointer">
//                     {product.name}
//                   </h2>
             
//                 <p className="text-sm text-gray-600 mt-1 truncate">{product.description}</p>

//                 <div className="mt-3 flex justify-between items-center">
//                   <span className="text-lg font-bold text-gray-800">
//                     {new Intl.NumberFormat("en-US", {
//                       style: "currency",
//                       currency: "USD",
//                     }).format(product.price)}
//                   </span>

//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className="bg-blue-600 text-white rounded-md py-2 px-4 text-sm font-semibold hover:bg-blue-700"
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {cartModelVisibility && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-96 sm:w-80 md:w-96">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               Product Added To Cart
//             </h2>
//             <div className="overflow-y-auto max-h-40">{renderCartItems()}</div>
//             <div className="flex justify-between items-center mt-6">
//               <button
//                 onClick={closeModel}
//                 className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
//               >
//                 Continue Shopping
//               </button>
//               <a
//                 href="/comp/cart"
//                 className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Visit Cart
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;


"use client";

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
          `*[_type=="products"][0..3]{
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
  <h2 className="text-white ml-4 text-lg font-bold mb-2">{product.name}</h2>
  <p className="text-white text-sm text-center mb-4 line-clamp-2">
    {product.description}
  </p>
  <Link href={`/productOne/${product._id}`}>
    <button className="bg-[#B88E2F] text-black px-6 py-2 font-semibold hover:bg-[#A67C2A] transition-colors duration-300">
      View Detail
    </button>
  </Link>
 
</div>
                <div className=" p-4">
                  <h2 className="text-gray-900 title-font text-lg font-bold">{product.name}</h2>
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