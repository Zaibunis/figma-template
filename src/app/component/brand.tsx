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
    srcUrl: "/Group (3).png",
  },
];

const Brands = () => {
  return (
    <div className="bg-black">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            width={116} // Explicit width
            height={26} // Explicit height
            alt={brand.id}
            className="max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
