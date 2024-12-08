import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 lg:px-0">
        {/* Left Section */}
        <section className="max-w-frame">
          <h2 className="text-4xl sm:text-5xl lg:text-[50px] lg:leading-[50px] mb-5 font-extrabold text-left lg:mb-8 pl-0 lg:pl-8 font-integral">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h2>
          <p className="text-black/60 text-sm sm:text-base mb-6 lg:mb-8 max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <div>
            <button className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full">
              Shop Now
            </button>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center md:justify-start space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
            <div className="flex flex-col text-center sm:text-left">
              <span className="font-bold text-2xl sm:text-3xl lg:text-[40px] xl:text-[40px] xl:mb-2">
                200+
              </span>
              <span className="text-xs xl:text-base text-black/60">
                International Brands
              </span>
            </div>
            <div className="hidden sm:block sm:h-12 md:h-full mx-6 md:mx-3 bg-black/10 vertical"></div>
            <div className="flex flex-col text-center sm:text-left">
              <span className="font-bold text-2xl sm:text-3xl lg:text-[40px] xl:text-[40px] xl:mb-2">
                2000+
              </span>
              <span className="text-xs xl:text-base text-black/60">
                High-Quality Products
              </span>
            </div>
            <div className="hidden sm:block sm:h-12 md:h-full mx-6 md:mx-3 bg-black/10 vertical"></div>
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0">
              <span className="font-bold text-2xl sm:text-3xl lg:text-[40px] xl:text-[40px] xl:mb-2">
                30,000+
              </span>
              <span className="text-xs xl:text-base text-black/60">
                Happy Customers
              </span>
            </div>
          </div>
        </section>
        {/* Right Section (Image and Stars) */}
        <section className="relative min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          <Image
            priority
            src="/Vector.png"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
          />
          <Image
            priority
            src="/Vector (1).png"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]"
          />
        </section>
      </div>
    </header>
  );
};

export default Header;
