'use client'

import Image from "next/image"
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


const Page = () => {

  const [selectedSize, setSelectedSize] = useState<string | null>(null); // Track selected size

  // Function to handle size selection
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size); // Set the selected size on click
  };

    // State to track selected color
  const [selectedColor, setSelectedColor] = useState<string | null>(null); // State can be string or null

  // Function to handle color selection, with explicit type for 'color'
  const handleColorSelect = (color: string) => {
    setSelectedColor(color); // Set the selected color
  };

  const [quantity, setQuantity] = useState(1);

  // Handle increasing the quantity
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Handle decreasing the quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    const itemToAdd = {
      id: 1, // Unique ID for the item (could be dynamic)
      name: "One Life Graphic T-shirt", // Product name
      price: 260, // Product price
      quantity: quantity, // Quantity selected
      image: "/image 1.png", // Product image path
    };
  
    // Get the current cart from localStorage, or create an empty array if none exists
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  
    // Check if the item is already in the cart (by matching id)
    const existingItemIndex = existingCart.findIndex((item: any) => item.id === itemToAdd.id);
  
    if (existingItemIndex !== -1) {
      // If the item exists, update the quantity
      existingCart[existingItemIndex].quantity += itemToAdd.quantity;
    } else {
      // If the item does not exist, add it
      existingCart.push(itemToAdd);
    }
  
    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));
  
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

  const reviews = [
    {
      name: 'Samantha D.',
      review: "I absolutely love this t&#8209;shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&#39;s become my favorite go-to shirt.",
      date: 'August 14, 2023',
    },
    {
      name: 'Ethan R.',
      review: "This t&#8209;shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&#39;s touch in every aspect of this shirt.",
      date: 'Posted on August 16, 2023',
    },
    {
      name: 'Liam K.',
      review: "This t&#8209;shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer&#39;s skill. It&#39;s like wearing a piece of art that reflects my passion for both design and fashion.",
      date: 'Posted on August 18, 2023',
    },
    {
      name: 'Alex M.',
      review: "The t&#8209;shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&#39;m quite picky about aesthetics, and this t&#8209;shirt definitely gets a thumbs up from me.",
      date: 'Posted on August 15, 2023',
    },
    {
      name: 'Olivia P.',
      review: "As a UI/UX enthusiast, I value simplicity and functionality. This t&#8209;shirt not only represents those principles but also feels great to wear. It&#39;s evident that the designer poured their creativity into making this t&#8209;shirt stand out.",
      date: 'Posted on August 17, 2023',
    },
    {
      name: 'Ava H.',
      review: "I am not just wearing a t&#8209;shirt; I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: 'Posted on August 19, 2023',
    },
  ];

  const [showAll, setShowAll] = useState(false); // Initialize showAll state to toggle reviews

  // Toggle function to show more or fewer reviews
  const toggleReviews = () => {
    setShowAll(!showAll); // Toggle the state
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
            <Image
              src="/Frame (3).png"
              alt="Cart"
              width={24}
              height={24}
              className="cursor-pointer"
            />

            {/* Profile Icon */}
            <Image
              src="/Frame (4).png"
              alt="Profile"
              width={24}
              height={24}
              className="cursor-pointer"
            />
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
      <BreadcrumbLink href="/components">Shop</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Men</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>T-shirts</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

<div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-10 lg:px-[100px]">
  {/* Thumbnail Images */}
  <div className="flex flex-col gap-4 mt-[30px] justify-center md:w-[20%] lg:w-[15%]">
    <div className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
      <Image src="/image 2.png" width={152} height={167} alt="Thumbnail 1" />
    </div>
    <div className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
      <Image src="/image 5.png" width={152} height={168} alt="Thumbnail 2" />
    </div>
    <div className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
      <Image src="/image 6.png" width={152} height={167} alt="Thumbnail 3" />
    </div>
  </div>

  {/* Product Details Section */}
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
            src="/image 1.png"
          />
        </div>

        <div className="flex flex-col md:w-1/2 mt-6 md:mt-0 md:pl-10 lg:py-6">
  <h1 className="text-black text-3xl title-font font-extrabold mb-1 text-center md:text-left">
    One Life Graphic T-shirt
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
      <span className="font-bold text-black text-2xl">$260</span>
      <span className="line-through text-2xl ml-2">$300</span>
      <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
        -40%
      </span>
    </div>
  </div>

  {/* Product Description */}
<p className="mb-5 text-sm whitespace-normal text-center md:text-left">
  This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
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
</div></div>
</section>
</div>





<div className="flex flex-col mb-[25px] px-4 md:px-8">
  {/* Tabs Section */}
  <div className="flex flex-wrap items-center justify-center md:justify-between mt-[20px]">
    <span className="text-gray-500 border-b-2 border-gray-300 flex-1 text-center py-2 md:py-0">
      Product Details
    </span>
    <span className="text-black border-b-2 border-black flex-1 text-center py-2 md:py-0">
      Rating & Reviews
    </span>
    <span className="text-gray-500 border-b-2 border-gray-300 flex-1 text-center py-2 md:py-0">
      FAQs
    </span>
  </div>
</div>


{/* Reviews Section */}
<div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:gap-7 ml-0 md:ml-[70px]">
  <h2 className="text-black font-semibold text-3xl">All Reviews</h2>
  <span className="text-gray-500 mt-2 md:mt-0 md:ml-3">(451)</span>

  {/* Button Container */}
<div className="flex flex-wrap gap-2 mt-4 md:mt-0 justify-center md:justify-end px-4 md:px-8">
  <div className="w-full flex justify-center md:justify-end">
    <span className="bg-gray-100 font-semibold rounded-full text-sm w-[48px] h-[48px] flex items-center justify-center text-black mb-5">
      <Image src="/Frame (10).png" width={24} height={24} alt="" />
    </span>
    <span className="bg-gray-100 font-semibold rounded-full text-sm w-[120px] h-[48px] flex items-center justify-center text-black mb-5 ml-2">
      Latest
      <Image src="/Frame (9).png" width={24} height={24} alt="" />
    </span>
    <span className="bg-black font-semibold rounded-full text-sm w-[166px] h-[48px] flex items-center justify-center text-white mb-5 ml-2">
      Write a Review
    </span>
  </div>
</div>
</div>

{/* Reviews Grid Section */}
<div className="flex flex-col md:flex-row justify-between gap-7 px-4 md:px-[70px]">
        {/* Left Column with Reviews */}
        <div className="w-full md:w-1/2 p-4">
          <div className="grid grid-cols-1 gap-7">
            {/* Initially show 3 reviews on the left */}
            {reviews.slice(0, showAll ? 6 : 3).map((review, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg">
                <div className="flex space-x-1 justify-start mb-4">
                  {/* Rating Stars */}
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <h2 className="text-black text-lg font-bold mb-3 flex items-center">
                  {review.name}
                  <div className="ml-3 flex items-center space-x-2">
                    {/* Tick Mark (checkmark) SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white bg-green-500 rounded-lg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </h2>

                <p className="text-sm">{review.review}</p>
                <p className="text-sm mt-8">Posted on {review.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer for layout */}
        <div className="w-0 md:w-2"></div>

        {/* Right Column with Reviews */}
        <div className="w-full md:w-1/2 p-4">
          <div className="grid grid-cols-1 gap-7">
            {/* Show next 3 reviews on the right */}
            {reviews.slice(3, showAll ? 9 : 6).map((review, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg">
                <div className="flex space-x-1 justify-start mb-4">
                  {/* Rating Stars */}
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <h2 className="text-black text-lg font-bold mb-3 flex items-center">
                  {review.name}
                  <div className="ml-3 flex items-center space-x-2">
                    {/* Tick Mark (checkmark) SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white bg-green-500 rounded-lg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </h2>

                <p className="text-sm">{review.review}</p>
                <p className="text-sm mt-8">Posted on {review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Load More / Show Less Button */}
      <div className="flex justify-center mt-[20px]">
        <button
          className="w-[230px] font-medium h-[52px] border-2 border-gray-100 text-black text-sm rounded-full"
          onClick={toggleReviews}
        >
          {showAll ? 'Show Less' : 'Load More Reviews'}
        </button>
      </div>
   
    <section className="py-10 bg-white">
      {/* Header */}
      <div className="text-center mb-8 relative">
        <h2 className="text-3xl font-extrabold text-black ml-[55px]">YOU MIGHT ALSO LIKE</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 px-4 md:px-8">
        {/* Product Card 1 */}
        <div className="text-center">
          <Image
            src="/Frame 32 (3).png"
            alt="T-shirt with Tape Details"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black ">Polo with Contrast Trims</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★★☆ <span className="text-black text-sm">4.0/</span>
            <span className="text-gray-500">5</span>
          </div>
          <div className="flex justify-center gap-2 text-gray-500">
            <span className="font-bold text-black">$212</span>
            <span className="line-through">$242</span>
            <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
              -20%
            </span>
          </div>
       </div>

        {/* Product Card 2 */}
        <div className="text-center">
          <Image
            src="/Frame 33 (7).png"
            alt="Skinny Fit Jeans"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black ">Gradient Graphic  T-shirt</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★☆☆ <span className="text-black text-sm">3.5/</span>
            <span className="text-gray-500">5</span>
          </div>
          <div className="flex justify-center gap-2 text-gray-500">
            <span className="font-bold text-black">$145</span>
            
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="text-center">
          <Image
            src="/Frame 34 (2).png"
            alt="Checkered Shirt"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black">Polo with Tipping Details</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★★☆ <span className="text-black text-sm">4.5/</span>
            <span className="text-gray-500">5</span>
          </div>
          <p className="font-bold text-black">$180</p>
        </div>

        {/* Product Card 4 */}
        <div className="text-center">
          <Image
            src="/Frame 38 (2).png"
            alt="Sleeve Striped T-shirt"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black">Black Striped  T-shirt</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★☆☆ <span className="text-black text-sm">5.0/</span>
            <span className="text-gray-500">5</span>
          </div>
          <div className="flex justify-center gap-2 text-gray-500">
            <span className="font-bold text-black">$120</span>
            <span className="line-through">$150</span>
            <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
              -30%
            </span>
          </div>
        </div>
      </div>

    
    

    </section>
    <div>
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
</div>
   


  )
}

export default Page
