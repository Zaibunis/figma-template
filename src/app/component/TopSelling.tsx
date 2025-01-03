import Image from "next/image";

export default function TopSelling() {
  return (
    <section className="py-10 bg-white">
      {/* Header */}
      <div className="text-center mb-8 relative">
        <h2 className="text-3xl font-extrabold text-black">TOP SELLING</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8">
        {/* Product Card 1 */}
        <div className="text-center">
          <Image
            src="/Frame 32 (2).png"
            alt="T-shirt with Tape Details"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black ">Vertical Striped Shirt</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★★☆ <span className="text-black text-sm">5.0/</span>
            <span className="text-gray-500">5</span>
          </div>
          <div className="flex justify-center gap-2 text-gray-500">
            <span className="font-bold text-black">$212</span>
            <span className="line-through">$232</span>
            <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
              -20%
            </span>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="text-center">
          <Image
            src="/Frame 33 (6).png"
            alt="Skinny Fit Jeans"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black ">Courage Graphic T-shirt</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★☆☆ <span className="text-black text-sm">4.0/</span>
            <span className="text-gray-500">5</span>
          </div>
            <span className="font-bold text-black">$145</span>
        </div>

        {/* Product Card 3 */}
        <div className="text-center">
          <Image
            src="/Frame 34 (1).png"
            alt="Checkered Shirt"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black">Loose Fit Bermuda Shorts</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★★☆ <span className="text-black text-sm">3.0/</span>
            <span className="text-gray-500">5</span>
          </div>
          <p className="font-bold text-black">$80</p>
        </div>

        {/* Product Card 4 */}
        <div className="text-center">
          <Image
            src="/Frame 38 (1).png"
            alt="Sleeve Striped T-shirt"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black">Faded Skinny Jeans</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★☆☆ <span className="text-black text-sm">4.5/</span>
            <span className="text-gray-500">5</span>
          </div>
            <span className="font-bold text-black">$210</span>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-2 border w-[218px] h-[52px] border-gray-400 rounded-full text-black font-semibold hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>

      {/* Bottom Border */}
      <div className="border-b border-gray-300 mt-10 mx-4 md:mx-8"></div>

    </section>
  );
}