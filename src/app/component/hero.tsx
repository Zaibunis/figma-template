import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Hero() {
    return (
      <section className="relative bg-gray-100">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-8">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-black leading-tight text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="mt-4 text-sm text-gray-600">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <div className="w-full sm:w-[284px] md:w-[284px] lg:w-[284px] h-[64px] bg-black text-white rounded-full mt-5 shadow-md flex justify-center items-center mb-5 cursor-pointer">
            <span className="text-lg font-medium mr-2">Shop Now</span>
          </div>
          <div className="flex flex-col md:flex-row md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
            <div className="flex flex-col text-center md:text-left">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                200+
              </span>
              <span className="text-xs xl:text-base text-black/60">
                International Brands
              </span>
            </div>
            <div className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10">
              <div className="h-12 w-px bg-black/10"></div>
            </div>
            <div className="flex flex-col text-center md:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                2000+
              </span>
              <span className="text-xs xl:text-base text-black/60">
                High-Quality Products
              </span>
            </div>
            <div className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10">
              <div className="h-12 w-px bg-black/10"></div>
            </div>
            <div className="flex flex-col text-center sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                30,000+
              </span>
              <span className="text-xs xl:text-base text-black/60">
                Happy Customers
              </span>
            </div>
          </div>
        </div>
    
        {/* Right Content */}
        <div className="lg:w-1/2 flex items-center justify-center relative">
          {/* Image */}
          <Image
            src="/Rectangle 2.png"
            alt="Fashion Style"
            width={390}
            height={448}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
    
          {/* Floating Elements as Images */}
          <div className="absolute top-4 left-8 w-16 h-16 rounded-full shadow-lg">
            <Image
              src="/Vector (1).png"
              alt="Floating Icon FN"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
    
          <div className="absolute bottom-12 right-12 w-16 h-16 rounded-full shadow-lg">
            <Image
              src="/Vector.png"
              alt="Floating Icon AS"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    
    );
  }
  