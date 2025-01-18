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

const Main3: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartModelVisibility, setCartModelVisibility] = useState<boolean>(false);
  const [cart, setCart] = useState<any[]>([]);
  const [allFetchedProducts, setAllFetchedProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    const fetchData = async () => {
      try {
        const fetchedProducts = await sanityFetch({ query: allProductsQuery });
        setAllFetchedProducts(fetchedProducts);
        setProducts(fetchedProducts.slice(0, 4)); // Initially display the first 4 products
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (allFetchedProducts.length > 0) {
        setProducts((prevProducts) => {
          const nextProduct = allFetchedProducts[currentIndex % allFetchedProducts.length];
          const updatedProducts = [...prevProducts.slice(1), nextProduct];
          return updatedProducts;
        });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allFetchedProducts.length);
      }
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [allFetchedProducts, currentIndex]);

  const handleAddToCart = (item: Product) => {
    const updatedCart = [
      ...cart,
      { ...item, images: item.imageUrl || placeholderImage, quantity: 1 },
    ];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartModelVisibility(true);
  };

  const renderCartItems = () => {
    return cart.map((item) => (
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
    ));
  };

  const closeModel = () => {
    setCartModelVisibility(false);
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8">
    

      {/* Product Section */}
      {loading ? (
        <p className="text-center text-yellow-400">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300 w-full"
            >
              <div className="relative w-full h-64">
                <img
                  src={product.imageUrl || placeholderImage}
                  alt={product.name || "Product image"}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1 truncate">
                  {product.description}
                </p>

                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(product.price)}
                  </span>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white rounded-md py-2 px-4 text-sm font-semibold hover:bg-blue-700"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Modal */}
      {cartModelVisibility && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4 sm:px-0">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Product Added To Cart
            </h2>
            <div className="overflow-y-auto max-h-40">{renderCartItems()}</div>
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

export default Main3;
