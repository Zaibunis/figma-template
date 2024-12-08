import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-black text-white w-[390px] h-[50px] mx-auto mb-0">
        <div className="container mx-auto flex justify-between items-center h-full px-4">
          {/* Left side Text */}
          <div className="flex items-center">
            <span className="text-sm">Sign up and get 20% off your first order.</span>
          </div>

          {/* Right side - Sign Up Now with underline */}
          <div>
            <Link href="/signup" className="underline hover:text-gray-300 text-sm">
              Sign Up Now
            </Link>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="bg-gray-100 py-10">
        {/* Logo and Icons Section with white background */}
        <div className="bg-white flex justify-between items-center w-[390px] mx-auto px-4 mb-0" style={{ height: '90px' }}>
          {/* Left - Logo */}
          <div className="flex items-center">
            <Image
              src="/Frame (1).png"
              alt="Frame"
              width={24}
              height={24}
              className="mr-10"
            />
            <Image
              src="/SHOP.CO.png"
              alt="SHOP.CO"
              width={126}
              height={50}  // Increased height for the logo
            />
          </div>

          {/* Right - Icons */}
          <div className="flex space-x-4">
            <Image src="/Frame (2).png" alt="Icon 1" width={24} height={24} />
            <Image src="/Frame (3).png" alt="Icon 2" width={24} height={24} />
            <Image src="/Frame (4).png" alt="Icon 3" width={24} height={24} />
          </div>
        </div>

        {/* Main Text */}
        <div className="bg-[#F2F0F1] p-5 w-[315px] text-left font-integral text-2xl md:text-4xl lg:text-5xl text-black font-extrabold rounded-md mx-auto mb-10">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </div>

        {/* Sub Text */}
        <div className="w-[315px] text-left text-[14px] text-[#00000099] mx-auto mb-10">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </div>

        {/* Button Container */}
        <div className="w-[358px] sm:w-[284px] md:w-[284px] lg:w-[284px] mx-auto mb-10">
          <button className="w-full h-[52px] bg-black text-white rounded-full flex justify-center items-center">
            Shop Now
          </button>
        </div>

        {/* Statistics Section */}
        <div className="flex justify-between mt-10 mx-auto w-[390px] bg-gray-100 py-10">
          {/* First Column */}
          <div className="flex flex-col items-center w-[160px]">
            <span className="text-4xl font-bold text-black">200+</span>
            <span className="text-sm text-gray-700">International Brands</span>
          </div>

          {/* Divider */}
          <div className="border-l-2 border-gray-300 h-[60px] mx-10"></div>

          {/* Second Column */}
          <div className="flex flex-col items-center w-[160px]">
            <span className="text-4xl font-bold text-black">2,000+</span>
            <span className="text-sm text-gray-700">High-Quality Products</span>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-black">30,000+</span>
            <span className="text-sm text-gray-700">Happy Customers</span>
          </div>
        </div>

       {/* Image Section */}
<div className="mt-10 relative flex justify-center">
  {/* First Image - Container */}
  <Image 
    src="/Rectangle 2.png" 
    alt="Rectangle" 
    width={250}  // Reduced width
    height={80}  // Reduced height
    className="relative" // Set this as the relative container for positioning
  />

  {/* Second Image - Positioned on top-right beside the boy's hair */}
  <Image 
    src="/Vector.png" 
    alt="Vector" 
    width={76} 
    height={76} 
    className="absolute top-0 right-0 mt-4 mr-4"  // Positioned to top-right, small margin for correct placement
  />

  {/* Third Image - Positioned on top-left beside the girl's hair */}
  <Image 
    src="/Vector (1).png" 
    alt="Vector (1)" 
    width={44} 
    height={44} 
    className="absolute top-0 left-0 mt-4 ml-4"  // Positioned to top-left, small margin for correct placement
  />
</div>




</div>
</div>

  );
}
