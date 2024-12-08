import Image from "next/image"

export default function Index() {
    return (
        <div className="bg-gray-100">
            <div>
                <div>
                    <Image 
                        src={"/E-commerce Website Template (FREEBIE).png"} 
                        alt="" 
                        width={1072} 
                        height={129}
                        className="mt-20 ml-36 mb-20 w-full sm:w-auto"
                    />
                </div>

                <div className="flex justify-center items-center">
                    {/* Container for boxes */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Box 1 */}
                        <div className="w-full sm:w-[202px] md:w-[202px] lg:w-[202px] h-[64px] bg-gray-300 text-black rounded-full shadow-md flex justify-center items-center ">
                            <span className="text-md font-medium mr-2">Homepage</span>
                            <Image src={"/Frame.png"} alt="" width={24} height={24} />
                        </div>

                        {/* Box 2 */}
                        <div className="w-full sm:w-[298px] md:w-[298px] lg:w-[298px] h-[64px] bg-gray-300 text-black rounded-full shadow-md flex justify-center items-center">
                            <span className="text-md font-medium mr-2">Product Detail Page</span>
                            <Image src={"/Frame.png"} alt="" width={24} height={24} />
                        </div>

                        {/* Box 3 */}
                        <div className="w-full sm:w-[244px] md:w-[244px] lg:w-[244px] h-[64px] bg-gray-300 text-black rounded-full shadow-md flex justify-center items-center">
                            <span className="text-sm font-medium mr-2">Category Page</span>
                            <Image src={"/Frame.png"} alt="" width={24} height={24} />
                        </div>

                        {/* Box 4 */}
                        <div className="w-full sm:w-[130px] md:w-[130px] lg:w-[130px] h-[64px] bg-gray-300 text-black rounded-full shadow-md flex justify-center items-center">
                            <span className="text-sm font-medium mr-2">Cart</span>
                            <Image src={"/Frame.png"} alt="" width={24} height={24} />
                        </div>

                        {/* Box 5 */}
                        <div className="w-full sm:w-[284px] md:w-[284px] lg:w-[284px] h-[64px] bg-gray-300 text-black rounded-full shadow-md flex justify-center items-center">
                            <span className="text-sm font-medium mr-2">Mobile Responsive</span>
                            <Image src={"/Frame.png"} alt="" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
