"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
 
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
 
} from "@/components/ui/navigation-menu"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import Image from "next/image";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

import { client } from "@/sanity/lib/client"; // Sanity Client import
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: { id: string } }) {

  const [cartItems, setCartItems] = useState<any[]>([]);

  // Fetch cart items from localStorage on page load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  // Handle increasing the quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle decreasing the quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Add to cart function
  const addToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.title,
      price:
        typeof product.price === "string"
          ? parseFloat(product.price.replace("$", ""))
          : product.price,
      quantity: quantity,
      image: product.img,
    };

    let existingCart = [];

    // Try to get the cart from localStorage
    try {
      existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    } catch (error) {
      console.error("Error parsing cart data from localStorage:", error);
    }

    // Check if the item already exists in the cart
    const existingItemIndex = existingCart.findIndex(
      (item: any) => item.id === cartItem.id
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += cartItem.quantity;
    } else {
      existingCart.push(cartItem);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Update the state
    setCartItems(existingCart);

    // Show a success message
    alert(`${quantity} item(s) added to the cart!`);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to toggle the Shop dropdown
  const toggleShop = () => {
    setIsShopOpen(!isShopOpen);
  };
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query =  `*[_type=="products"]{
          _id,
          name,
          description,
          price,
          "imageUrl" : image.asset->url,
          category,
          discountPercent,
          "isNew": new,
          colors,
          sizes
        }`
        

        const fetchedProduct = await client.fetch(query);
        const index = fetchedProduct.findIndex((item: { _id: string }) => item._id === params.id);
        const getProduct = fetchedProduct[index];

        if (getProduct) {
          setProduct(getProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <div>Loading product details...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return notFound();
  }

  return (
    <div>
           {/* Sticky Announcement Section */}
<header>
  <div className="w-full h-[38px] flex items-center justify-between bg-[#000000] text-[#FFFFFF] font-integral px-[20px] sm:px-[55px] sticky top-0 z-10">
    {/* Text and Sign-Up Link */}
    <div className="flex items-center justify-between w-full sm:w-auto">
      <span className="text-xs sm:text-base text-center sm:text-left sm:ml-[400px] w-full sm:w-auto">
        Sign up and get 20% off your first order.
      </span>

      <div className="flex items-center mt-0 sm:mt-0 space-x-2 sm:space-x-3">
        {/* Sign Up Now with Icon in One Line */}
        <div className="flex items-center ml-3">
          <span className="mr-3 underline whitespace-nowrap">Sign Up Now</span>
          <Image
            src="/Vector (2).png"
            alt="arrow"
            width={20}
            height={20}
            className="ml-10"
          />
        </div>
      </div>
    </div>
  </div>


        {/* Navigation Section */}
        <div className="flex items-center justify-between px-[20px] sm:px-[100px] py-4 bg-white">
          {/* Logo */}
          <div>
            <Image src="/SHOP.CO.png" alt="Logo" width={141} height={22} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-x-12">
            <li>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
            <NavigationMenuContent className="w-[300px] py-2 px-4 bg-white shadow-lg rounded-lg">
              {/* Link for Mens */}
              <NavigationMenuLink className="font-bold text-black block mb-2">
                <Link href="/comp/mens-clothes">Mens-Clothes</Link>
              </NavigationMenuLink>
              {/* Line break added */}
              <br />
              {/* Link for Casual */}
              <NavigationMenuLink className="font-bold text-black block mb-2">
                <Link href="/comp/casual">Casual</Link>
              </NavigationMenuLink>
              {/* Line break added */}
              <br />
              {/* Link for Cart */}
              <NavigationMenuLink className="font-bold text-black block">
                <Link href="/comp/cart">Cart</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </li>
              <li>
                <Link href="/" className="hover:underline whitespace-nowrap">
                  On Sale
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline whitespace-nowrap">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline whitespace-nowrap mr-3">
                  Brands
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right-Side Elements */}
          <div className="flex ml-3 items-center gap-x-6">
            {/* Search Bar */}
            <div className="relative">
              <Image src="/Frame 3.png" alt="Search Icon" width={477} height={48} />
            </div>
{/* Cart Icon */}
<Link href="/comp/cart">
  <Image
    src="/Frame (3).png"
    alt="Cart"
    width={24}
    height={24}
    className="cursor-pointer"
  />
</Link>
            {/* Profile Icon */}
            <Link href="/component/authentication">
            <Image
              src="/Frame (4).png"
              alt="Profile"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            </Link>
          </div>

           {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center ml-4">
        <button onClick={toggleMenu}>
          <div className="w-6 h-6 flex flex-col justify-between items-center space-y-1">
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
          </div>
        </button>
      </div>
      </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white px-[20px] py-4">
          <ul>
            <li className="py-2">
              <button onClick={toggleShop} className="block hover:underline w-full text-left">
                Shop
              </button>
              {isShopOpen && (
                <ul className="pl-4">
                  <li className="py-2">
                    <Link href="/comp/mens-clothes" className="block hover:underline">
                      Mens
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/comp/casual" className="block hover:underline">
                      Casual
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/comp/cart" className="block hover:underline">
                      Cart
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="py-2">
              <Link href="/" className="block hover:underline">
                On Sale
              </Link>
            </li>
            <li className="py-2">
              <Link href="/" className="block hover:underline">
                New Arrivals
              </Link>
            </li>
            <li className="py-2">
              <Link href="/" className="block hover:underline">
                Brands
              </Link>
            </li>
          </ul>
        </div>
      )}
        {/* Breadcrumb Section */}
<Breadcrumb className='mt-5 ml-[95px]'>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Top Selling</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
  
     <div className="max-w-[1280px] min-h-[80vh] p-3 m-auto">
       <div className="w-full flex md:flex-row flex-col md:py-12">
         {/* Left Section */}
         <div className="md:w-3/5 w-full">
           <div className="p-6 bg-[#F9F1E7]">
             <Image
               src={product.imageUrl}
               alt={product.title}
               width={600}
               height={600}
               className="w-full h-full object-cover"
             />
           </div>
         </div>
     
         {/* Right Section */}
         <div className="md:w-2/5 w-full md:pl-8 pl-0 pt-10">
           {/* Product Title */}
           <h1 className="text-3xl font-bold mb-3">{product.title || "Classic Black Long Sleeve Button-Down Shirt"}</h1>
     
           {/* Reviews */}
           <div className="flex items-center gap-2 mb-4">
             <div className="flex items-center text-yellow-500">
               {[1, 2, 3, 4].map((star) => (
                 <IoIosStar key={star} className="w-5 h-5" />
               ))}
               <IoIosStarHalf className="w-5 h-5" />
             </div>
             <span className="text-sm text-gray-500">(150 reviews)</span>
           </div>
     
           {/* Price Section */}
           <div className="flex items-center gap-2 mb-4">
             <span className="text-2xl font-bold text-black">${product.price || 240}</span>
             <span className="text-xl line-through text-gray-500">${product.cutPrice || 300}</span>
             <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">-20%</span>
           </div>
     
           {/* Description */}
           <p className="text-gray-700 leading-relaxed mb-6">
             {product.description ||
               "Stylish and durable skinny-fit denim."}
           </p>
     
           {/* Colors */}
           <div className="mb-4">
             <span className="text-sm font-medium mb-5 text-gray-600 text-center md:text-left">Select Colors</span>
             <div className="flex gap-3">
               <button className="w-8 h-8 rounded-full bg-[#4B5320] focus:ring-2 focus:ring-offset-1 focus:ring-black"></button>
               <button className="w-8 h-8 rounded-full bg-[#013220] focus:ring-2 focus:ring-offset-1 focus:ring-black"></button>
               <button className="w-8 h-8 rounded-full bg-[#000033] focus:ring-2 focus:ring-offset-1 focus:ring-black"></button>
             </div>
           </div>
     
         {/* Sizes */}
         <div className="mb-4">
             <span className="text-sm font-medium mb-5 text-gray-600 text-center md:text-left">Choose Size</span>
             <div className="flex gap-3">
               {["Small", "Medium", "Large", "X-Large"].map((size) => (
                 <button
                   key={size}
                   className="rounded-full text-sm w-[104px] h-[46px] flex items-center justify-center mb-5 cursor-pointer bg-gray-100 text-gray-500 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                 >
                   {size}
                 </button>
               ))}
             </div>
           </div>
     
            {/* Quantity and Add to Cart */}
      <div className="flex items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center justify-between border bg-gray-100 px-4 py-2 rounded-full w-[170px] h-[52px]">
          <button
            className="text-lg font-semibold text-black"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="text-sm text-center text-black">
            {quantity < 10 ? `0${quantity}` : quantity}
          </span>
          <button
            className="text-lg font-semibold text-black"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          className="px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 w-full sm:w-[400px] h-[52px] flex items-center justify-center"
          onClick={addToCart}
        >
          Add to Cart
        </button>
           </div>
         </div>
       </div>
     </div>
     
                {/* Newsletter Signup */}
                       <div className="w-full bg-black rounded-lg py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
                        {/* Text Section */}
                        <div className="text-left text-white mb-4 md:mb-0">
                          <span className="text-3xl font-extrabold block mb-4">
                            STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
                          </span>
                        </div>
              
                        {/* Right Section */}
                        <div className="flex flex-col items-end space-y-4 w-full md:w-auto">
                          {/* Email Input Section */}
                          <div className="relative w-full md:w-[349px]">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <Image src="/Frame (8).png" width={24} height={24} alt="Newsletter Icon" />
                            </div>
                            <Input
                              type="email"
                              placeholder="Enter your email address"
                              className="w-full h-[48px] pl-12 rounded-lg border-none"
                            />
                          </div>
              
                          {/* Box Section */}
                          <div className="relative w-full md:w-[349px] h-[48px] bg-white rounded-lg flex items-center pl-3">
                            <span className="ml-12 text-black font-medium">
                              Subscribe to Newsletter
                            </span>
                          </div>
                        </div>
                      </div>
                <footer className="text-gray-600 body-font bg-gray-100">
                  <div className="container border-b-2 border-gray-300 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <span className=" text-3xl text-black font-extrabold mb-[10px]">SHOP.CO</span>
                      <p className="mt-2 text-sm text-gray-500 mb-10">
                      We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
                      </p>
                      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                       
                        <span className="ml-3 text-black bg-white">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </span>
                
                        <span className="text-white bg-black ml-3 rounded-lg">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        </span>
                
                        <span className="ml-3 text-black bg-white">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                          </svg>
                        </span>
                        <span className="ml-3 text-black bg-white">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={0}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 007.88 10.92c.58.1.79-.25.79-.56v-2.01c-3.21.7-3.89-1.55-3.89-1.55-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.73 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.14 11.14 0 015.78 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.2 1.82 1.2 3.08 0 4.46-2.7 5.44-5.27 5.72.42.37.78 1.1.78 2.22v3.3c0 .31.2.67.79.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"
                    />
                  </svg>
                </span>
                
                      </span>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                        Company
                        </h2>
                        <nav className="list-none mb-10">
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                           About          
                         
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                           Features
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                           Works
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                           Career
                          </li>
                        </nav>
                      </div>
                      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                        Help
                        </h2>
                        <nav className="list-none mb-10">
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                            Customer Support
                
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                           Delivery Details
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                            Terms & Conditions
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                           Privacy Policy
                          </li>
                        </nav>
                      </div>
                      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                        FAQ
                        </h2>
                        <nav className="list-none mb-10">
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                           Account
                
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                            Manage Deliveries
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                            Orders
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                           Payments
                          </li>
                        </nav>
                      </div>
                      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                        Resources
                        </h2>
                        <nav className="list-none mb-10 ">
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                            Free eBooks
                
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                           Development Tutorial
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                            How to - Blog
                          </li>
                          <li className="text-gray-600 hover:text-gray-800 mb-4">
                            Youtube Playlist
                          </li>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100">
                  <div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-between">
                    {/* Footer Text */}
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                      Shop.co © 2000-2023, All Rights Reserved
                    </p>
                    
                    {/* Footer Images */}
                    <div className="flex space-x-4 mt-2 sm:mt-0">
                      <Image src="/Badge.png" width={46.61} height={30.03} alt="Badge 1" />
                      <Image src="/Badge (1).png" width={46.61} height={30.03} alt="Badge 2" />
                      <Image src="/Badge (2).png" width={46.61} height={30.03} alt="Badge 3" />
                      <Image src="/Badge (3).png" width={46.61} height={30.03} alt="Badge 4" />
                      <Image src="/Badge (4).png" width={46.61} height={30.03} alt="Badge 5" />
                    </div>
                  </div>
                </div>
                
                </footer>
                
     
    </div>
  );
}