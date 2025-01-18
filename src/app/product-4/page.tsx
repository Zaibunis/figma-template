'use client';

import React, { useState, useEffect } from "react";
import { sanityFetch } from "../../sanity/lib/fetch";
import { allProductsQuery } from "../api/query";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const placeholderImage = "https://via.placeholder.com/300";

const Main4: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartModelVisibility, setCartModelVisibility] = useState<boolean>(false);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    const fetchData = async () => {
      try {
        const fetchedProducts = await sanityFetch({ query: allProductsQuery });

        // Limit products to 8 items
        const limitedProducts = fetchedProducts.slice(0, 8);

        setProducts(limitedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item: Product) => {
    const updatedCart = [
      ...cart,
      { ...item, images: item.imageUrl || placeholderImage, quantity: 1 },
    ];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartModelVisibility(true);
  };

  const closeModel = () => {
    setCartModelVisibility(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {loading ? (
        <p className="text-center text-yellow-400">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between transition-transform hover:scale-105 duration-300"
              style={{ height: "380px", width: "100%" }} // Ensure full width
            >
              {/* Image Section */}
              <div className="relative w-full h-48">
                <img
                  src={product.imageUrl || placeholderImage}
                  alt={product.name || "Product image"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text and Button Section */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {product.name}
                  </h2>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-gray-600">Price:</span>
                    <span className="text-md font-bold text-gray-800">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(product.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-3 bg-blue-600 text-white rounded-lg py-2 px-4 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-blue-700 w-full"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartModelVisibility && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Product Added To Cart
            </h2>
            <div className="overflow-y-auto max-h-40">
              {cart.map((item) => (
                <div key={item._id} className="flex items-center gap-4 mb-4">
                  <img
                    src={item.images || placeholderImage}
                    alt={item.name || "Product image"}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-gray-800 font-bold">{item.price} USD</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={closeModel}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
              >
                Continue Shopping
              </button>
              <a
                href="/comp/cart"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Visit Cart
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main4;
