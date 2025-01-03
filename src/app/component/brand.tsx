import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/Group (1).png",
  },
  {
    id: "zara",
    srcUrl: "/zara-logo-1 1.png",
  },
  {
    id: "gucci",
    srcUrl: "/gucci-logo-1 1.png",
  },
  {
    id: "prada",
    srcUrl: "/prada-logo-1 1.png",
  },
  {
    id: "calvin-klein",
    srcUrl: "/calvinKlein.png",
  },
];

const Brands = () => {
  return (
    <div className="bg-black">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-4 sm:space-x-6 md:space-x-8">
        {brandsData.map((brand) => (
          <div key={brand.id} className="flex justify-center items-center">
            <Image
              priority
              src={brand.srcUrl}
              height={33.16}
              width={166.48}
              alt={brand.id}
              className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
