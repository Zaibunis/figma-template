import Image from "next/image"

export default function Arrival (){
    return(
        <div>
        <div className="bg-white font-integral font-extrabold text-3xl ml-36 w-[403px] h-[58px] items-center justify-center">
      <div>NEW ARRIVALS</div>
        </div>
           
        
               {/* products */}
                 {/* container boxes */}
                 <div className="flex sm:flex-col md:flex-row justify-between mt-7">
                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/Frame 32.png"} alt="/" width={150} height={100}/>
                    </div>
                     {/* title */}
                     <div className="flex flex-col">
                        <span className="font-bold">T-SHIRT WITH TAPE DETAILS</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-black text-2xl">$120</span>
                     
                        </div>
                     </div>

                    </div>
                   <div>
                   <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/Frame 38.png"} alt="/" width={150} height={100}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">SKINNY FIT JEANS</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-black text-2xl">$240</span>
                        <span className="text-gray-500 line-through text-2xl">$260</span>
                        </div>
                     </div>
                    
                   </div>
                  <div>
                  <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/Frame 34.png"} alt="/" width={150} height={100}/>
                    </div>
                      {/* title */}
                      <div className="flex flex-col">
                        <span className="font-bold">CHECKERED SHIRT</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-black text-2xl">$180</span>
                       
                        </div>
                     </div>
                    
                  </div>
                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/Frame 38.png"} alt="/" width={130} height={100}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">SLEEVE STRIPED T-SHIRT</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-black text-2xl">$130</span>
                        <span className="text-gray-500 line-through text-2xl">$160</span>
                        
                     </div>
                    </div>
                 </div>
                 <button className="py-2 px-5 sm:block md:hidden bg-red-500  rounded-md text-white">View All</button>
            </div>
      </div>
    )
}