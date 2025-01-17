'use client'

import Image from 'next/image';

import Link from "next/link"
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
  import { useState } from "react"

interface Product {
  id: number;
  img: string;
  title: string;
  rating: number;
  price: string;
  originalPrice?: string;
  discount?: string;
  description: string;
}


export default function ProductDetail({ params }: any) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);


  const { id } = params;
  const productId = parseInt(id);

  
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

 // Find the product based on the productId
 const product = products.find((p) => p.id === productId);

 if (!product) {
   return <div>Product not found</div>;
 }


 // Function to handle size selection
 const handleSizeSelect = (size: string) => {
   setSelectedSize(size); // Set the selected size on click
 };

 // Function to handle color selection
 const handleColorSelect = (color: string) => {
   setSelectedColor(color); // Set the selected color
 };

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
   const itemToAdd = {
     id: product.id,
     name: product.title,
     price: parseFloat(product.price.replace('$', '')),
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
   const existingItemIndex = existingCart.findIndex((item: any) => item.id === itemToAdd.id);

   if (existingItemIndex !== -1) {
     existingCart[existingItemIndex].quantity += itemToAdd.quantity;
   } else {
     existingCart.push(itemToAdd);
   }

   // Save the updated cart back to localStorage
   localStorage.setItem("cart", JSON.stringify(existingCart));

   // Show a success message
   alert(`${quantity} item(s) added to the cart!`);
 };

 // Function to toggle mobile menu
 const toggleMenu = () => {
   setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 // Function to toggle the Shop dropdown
 const toggleShop = () => {
   setIsShopOpen(!isShopOpen);
 };

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
   <section className="text-gray-600 body-font overflow-hidden flex-1 w-full">
         <div className="container px-5 py-5 mx-auto">
           <div className="flex flex-col md:flex-row justify-center items-center gap-6">
             {/* Main Product Image */}
             <div className="w-full md:w-1/2 mb-36 flex justify-center">
               <Image
                 alt="ecommerce"
                 width={444}
                 height={530}
                 className="w-full lg:h-auto h-64 object-cover object-center rounded"
                 src={product.img}
               />
             </div>
   
             {/* Product Info */}
             <div className="flex flex-col md:w-1/2 mt-6 md:mt-0 md:pl-10 lg:py-6">
               <h1 className="text-black text-3xl title-font font-extrabold mb-1 text-center md:text-left">
                 {product.title}
               </h1>
   
               {/* Rating Section */}
               <div className="flex flex-col mb-4 text-center md:text-left">
                 <div className="flex items-center justify-center md:justify-start mb-2">
                   {[...Array(5)].map((_, index) => (
                     <svg
                       key={index}
                       fill="currentColor"
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       className="w-[24.71px] h-[24.71px] text-yellow-500"
                       viewBox="0 0 24 24"
                     >
                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                     </svg>
                   ))}
                   <span className="text-black text-sm ml-[9px]">4.5/</span>
                   <span className="text-gray-500 text-sm">5</span>
                 </div>
   
                 {/* Pricing Section */}
                 <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
                   <span className="font-bold text-black text-2xl">{product.price}</span>
                   {product.originalPrice && (
                     <span className="line-through text-2xl ml-2">{product.originalPrice}</span>
                   )}
                   {product.discount && (
                     <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
                       {product.discount}
                     </span>
                   )}
                 </div>
               </div>
   
               {/* Product Description */}
               <p className="mb-5 text-sm whitespace-normal text-center md:text-left">
                 {product.description}
               </p>
   
   <div className="mb-4">
         <h2 className="text-sm font-medium text-gray-600 text-center md:text-left">
           Select Colors
         </h2>
         <div className="flex flex-wrap gap-3 mt-2 border-b-2 mb-5 justify-center md:justify-start">
           {/* First color with tick */}
           <button
             className="w-8 h-8 bg-[#4F4631] rounded-full border mb-5 relative"
             onClick={() => handleColorSelect('#4F4631')}
           >
             {selectedColor === '#4F4631' && (
               <Image
                 src="/Frame (14).png"
                 width={12}
                 height={12}
                 alt="Selected"
                 className="w-4 h-4 absolute top-2 left-2"
               />
             )}
           </button>
           {/* Other colors */}
           <button
             className="w-8 h-8 bg-[#314F4A] rounded-full border mb-5 relative"
             onClick={() => handleColorSelect('#314F4A')}
           >
             {selectedColor === '#314F4A' && (
               <Image
                 src="/Frame (14).png"
                 width={12}
                 height={12}
                 alt="Selected"
                 className="w-4 h-4 absolute top-2 left-2"
               />
             )}
           </button>
           <button
             className="w-8 h-8 bg-[#31344F] rounded-full border mb-5 relative"
             onClick={() => handleColorSelect('#31344F')}
           >
             {selectedColor === '#31344F' && (
               <Image
                 src="/Frame (14).png"
                 width={12}
                 height={12}
                 alt="Selected"
                 className="w-4 h-4 absolute top-2 left-2"
               />
             )}
           </button>
         </div>
       </div>
   
   {/* Size Selection */}
   <div className="mb-4">
         <h2 className="text-sm font-medium text-gray-600 text-center md:text-left">
           Choose Size
         </h2>
         <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-2 border-b-2 mb-5">
           <span
             className={`${
               selectedSize === 'Small' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'
             } rounded-full text-sm w-[86px] h-[46px] flex items-center justify-center mb-5 cursor-pointer`}
             onClick={() => handleSizeSelect('Small')}
           >
             Small
           </span>
           <span
             className={`${
               selectedSize === 'Medium' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'
             } rounded-full text-sm w-[105px] h-[46px] flex items-center justify-center mb-5 cursor-pointer`}
             onClick={() => handleSizeSelect('Medium')}
           >
             Medium
           </span>
           <span
             className={`${
               selectedSize === 'Large' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'
             } rounded-full text-sm w-[89px] h-[46px] flex items-center justify-center mb-5 cursor-pointer`}
             onClick={() => handleSizeSelect('Large')}
           >
             Large
           </span>
           <span
             className={`${
               selectedSize === 'X-Large' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'
             } rounded-full text-sm w-[104px] h-[46px] flex items-center justify-center mb-5 cursor-pointer`}
             onClick={() => handleSizeSelect('X-Large')}
           >
             X-Large
           </span>
         </div>
       </div>
   {/* Quantity Selector */}
   <div className="flex flex-wrap items-center mb-6 gap-4 justify-center md:justify-start">
         <div className="flex items-center justify-between border bg-gray-100 px-4 py-2 rounded-full w-[170px] h-[52px]">
           <button
             className="text-lg font-semibold text-black"
             onClick={decreaseQuantity}
           >
             -
           </button>
           <span className="text-sm text-center text-black">{quantity}</span>
           <button
             className="text-lg font-semibold text-black"
             onClick={increaseQuantity}
           >
             +
           </button>
         </div>
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
       </section>
   
     {/* Newsletter Signup Section */}
         <div className="mb-[1px] w-full mr-[50px] bg-black rounded-lg py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
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
   
         {/* Footer Section */}
         <footer className="text-gray-600 body-font bg-gray-100">
           <div className="container border-b-2 border-gray-300 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
             <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
               <span className="text-3xl text-black font-extrabold mb-[10px]">SHOP.CO</span>
               <p className="mt-2 text-sm text-gray-500 mb-10">
               We have clothes that suit your style and which you&#39;re proud to wear. From women to men.
   
               </p>
             </div>
   
             {/* Footer Links Section */}
             <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
               {/* Company Links */}
               <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                 <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                   Company
                 </h2>
                 <nav className="list-none mb-10">
                   <li className="text-gray-600 hover:text-gray-800 mb-4">About</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Features</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Works</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Career</li>
                 </nav>
               </div>
   
               {/* Help Links */}
               <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                 <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                   Help
                 </h2>
                 <nav className="list-none mb-10">
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Customer Support</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Delivery Details</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Terms & Conditions</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Privacy Policy</li>
                 </nav>
               </div>
   
               {/* FAQ Links */}
               <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                 <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                   FAQ
                 </h2>
                 <nav className="list-none mb-10">
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Account</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Manage Deliveries</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Orders</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Payments</li>
                 </nav>
               </div>
   
               {/* Resources Links */}
               <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                 <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                   Resources
                 </h2>
                 <nav className="list-none mb-10 ">
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Free eBooks</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Development Tutorial</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">How to - Blog</li>
                   <li className="text-gray-600 hover:text-gray-800 mb-4">Youtube Playlist</li>
                 </nav>
               </div>
             </div>
           </div>
   
           {/* Footer Bottom Section */}
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
