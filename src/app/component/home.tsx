'use client'


import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
 
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
 
} from "@/components/ui/navigation-menu"

export default function Home() {
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
    </div>
  )
}
