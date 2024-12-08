import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (

    <div className="bg-gray-100 min-h-screen mt-20">
    {/* Header */}
    <header className="bg-black text-white w-[1440px] h-[38px] mx-auto mb-0">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Left side Text */}
        <div className="flex items-center justify-center">
          <span className="text-sm w-[351] h-[19] ml-[80px] items-center">Sign up and get 20% off your first order.</span>
          <div>
          <Link href="/signup" className="underline  text-sm">
            Sign Up Now
          </Link>
        </div>
        <div className="flex-col">
        <Image src={"/Vector (2).png"} alt="" width={20} height={20} className="ml-[600px]"/>
        </div>
        </div>

       
</div>
</header>

    <div className="flex w-[1240] h-[41] sm:h-[90px] md:h-[80px] bg-white border-b-2 justify-center items-center">
      <div className="w-[80%] h-full flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center">
          <h1 className="text-4xl font-extrabold font-integral">Shop.co</h1>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-x-10">
          {/* Links */}
          <ul className="flex gap-x-8">
            <li>
              <Link href={"/"} className="hover:underline">
                Shop
                <Image src={"/DropDown.png"} alt="" width={24} height={24} className="bg-white"/>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:underline">
              On Sale
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:underline">
              New Arrival
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:underline">
              Brands
              </Link>
            </li>
          </ul>

          {/* Search Image */}
          <Image
            src={"/Frame 3.png"}
            alt="Search"
            width={577}
            height={48}
            className="ml-4"
          />
          {/* Cart */}
         <Image 
         src={"/Frame (3).png"}
         alt=""
         width={32}
         height={32}
         />
          {/* Profile */}
          <Image 
         src={"/Frame (4).png"}
         alt=""
         width={32}
         height={32}
         />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;
