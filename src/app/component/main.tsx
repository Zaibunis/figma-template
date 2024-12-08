import Image from "next/image";

export default function Main() {
  return (
    <div className="bg-gray-200">
      {/* Main Text */}
      <div className="bg-[#F2F0F1] p-5 w-[90%] max-w-[315px] text-left font-integral text-2xl md:text-4xl lg:text-5xl text-black font-extrabold rounded-md mx-auto mb-10">
        FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
      </div>

      {/* Sub Text */}
      <div className="w-[90%] max-w-[315px] text-left text-[14px] text-[#00000099] mx-auto mb-10">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </div>

      {/* Button Container */}
      <div className="w-[90%] max-w-[358px] mx-auto mb-10">
        <button className="w-full h-[52px] bg-black text-white rounded-full flex justify-center items-center">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full">
        <Image src="/Rectangle 2.png" alt="Main Image" width={78} height={78} />
      </div>
    </div>
  );
}
