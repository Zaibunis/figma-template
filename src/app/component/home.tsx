import Link from "next/link"
import Image from "next/image"

export default function Home() {
    return (
      <div className="bg-gray-100 min-h-screen w-[1440px] h-[38px] mt-[20px]">
        {/* Header */}
        <header className="bg-black text-white  mx-auto mb-0">
          <div className="container mx-auto flex justify-between items-center h-full px-4">
            {/* Left side Text */}
            <div className="flex items-center px-9 w-[351px] h-[10px]">
              <span className="text-sm ">Sign up and get 20% off your first order.</span>
            </div>
  
            {/* Right side - Sign Up Now with underline */}
            <div>
              <Link href="/signup" className="underline hover:text-gray-300 text-sm">
                Sign Up Now
              </Link>
            </div>
          </div>
        </header>

        
       </div>
      
      
       
    )
}
  