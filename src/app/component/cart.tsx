import Link from "next/link"
import Image from "next/image"

export default function Cart() {
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

=
 {/* Content Section */}
 <div className="bg-gray-100 py-10 ">
        {/* Logo and Icons Section with white background */}
        <div className="bg-white flex justify-between items-center w-[390px] mx-auto px-4 mb-0 border-b-2" style={{ height: '90px' }}>
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
</div>
<div className="flex items-center space-x-2 text-gray-600">
      {/* Home Link */}
      <Link href="/" className="text-gray-500">
        Home
      </Link>
      
      {/* Separator (>) */}
      <span>&gt;</span>

      {/* Cart Link */}
      <Link href="/cart" className="text-black">
        Cart
      </Link>
    </div>

    {/* Main Text */}
    <div className="bg-[#F2F0F1] p-5 w-[315px] text-left font-integral text-2xl md:text-4xl lg:text-5xl text-black font-extrabold rounded-md mx-auto mb-10">
          Your Cart
        </div>
       
    

      {/* Cart Items */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center border-b pb-4 rounded-lg 0 p-4">
          {/* Product Image */}
          <div className="flex items-center space-x-4">
            <Image
              src="/Frame 33.png" // Replace with actual image path
              alt="Product"
              width={99}
              height={99}
              className="w-20 h-20 object-cover rounded-md"
            />
           <div>
  <p className="font-semibold">Gradient Graphic T-shirt</p>
  <div className="mt-2">
    {/* Size */}
    <div className="flex justify-between items-center">
      <p className="text-sm text-black">Size:</p>
      <p className="text-sm text-gray-500">Large</p>
    </div>
    
    {/* Color */}
    <div className="flex justify-between items-center mt-2">
      <p className="text-sm text-black">Color:</p>
      <p className="text-sm text-gray-500">White</p>
    </div>
    
    {/* Price */}
    <div className="flex justify-end mt-4">
      <span className="font-bold text-2xl">$145</span>
    </div>
  </div>
</div>

          {/* Quantity Control */}
          <div className="flex items-center space-x-2">
            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">-</button>
            <span>1</span>
            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">+</button>
          </div>

          {/* Remove Item Button */}
          <Image src={"/Frame (6).png"} alt="" width={20} height={20}/>
        </div>

        <div className="flex justify-between items-center border-b pb-4 rounded-lg  p-4 mt-4">
          {/* Product Image */}
          <div className="flex items-center space-x-4">
            <Image
              src="/Frame 33 (1).png" // Replace with actual image path
              alt="Product"
              width={99}
              height={99}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="font-semibold">Product 2</p>
              <p className="text-sm text-gray-500">$49.99</p>
            </div>
          </div>

          {/* Quantity Control */}
          <div className="flex items-center space-x-2">
            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">-</button>
            <span>1</span>
            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">+</button>
          </div>
          {/* Remove Item Button */}
         <Image src={"/Frame (6).png"} alt="" width={20} height={20}/>
        </div>
        
        <div className="flex justify-between items-center border-b pb-4 rounded-lg  p-4">
          {/* Product Image */}
          <div className="flex items-center space-x-4">
            <Image
              src="/Frame 33 (2).png" // Replace with actual image path
              alt="Product"
              width={99}
              height={99}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="font-semibold">Product 1</p>
              <p className="text-sm text-gray-500">$29.99</p>
            </div>
          </div>

       
         {/* Quantity Control */}
         <div className="flex items-center space-x-2">
            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">-</button>
            <span>1</span>
            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">+</button>
          </div>


          {/* Remove Item Button */}
          <Image src={"/Frame (6).png"} alt="" width={20} height={20}/>
        </div>
      </div>

      </div>
 
</div>
     
  )
}
