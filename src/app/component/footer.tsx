import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-100">
  <div className="container border-b-2 border-gray-300 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <span className=" text-3xl text-black font-extrabold mb-[10px]">SHOP.CO</span>
      <p className="mt-2 text-sm text-gray-500 mb-10">
      We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
       
        <span className="ml-3 text-black bg-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </span>

        <span className="text-white bg-black ml-3 rounded-lg">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </span>

        <span className="ml-3 text-black bg-white">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </span>
        <span className="ml-3 text-black bg-white">
  <svg
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={0}
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <path
      stroke="none"
      d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 007.88 10.92c.58.1.79-.25.79-.56v-2.01c-3.21.7-3.89-1.55-3.89-1.55-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.73 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.14 11.14 0 015.78 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.2 1.82 1.2 3.08 0 4.46-2.7 5.44-5.27 5.72.42.37.78 1.1.78 2.22v3.3c0 .31.2.67.79.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"
    />
  </svg>
</span>

      </span>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
        Company
        </h2>
        <nav className="list-none mb-10">
          <li className="text-gray-600 hover:text-gray-800 mb-4">
           About          
         
          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
           Features
          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
           Works
          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
           Career
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
        Help
        </h2>
        <nav className="list-none mb-10">
          <li className="text-gray-600 hover:text-gray-800 mb-4">
            Customer Support

          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
           Delivery Details
          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
            Terms & Conditions
          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
           Privacy Policy
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
        FAQ
        </h2>
        <nav className="list-none mb-10">
          <li className="text-gray-600 hover:text-gray-800 mb-4">
           Account

          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
            Manage Deliveries
          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
            Orders
          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
           Payments
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
        Resources
        </h2>
        <nav className="list-none mb-10 ">
          <li className="text-gray-600 hover:text-gray-800 mb-4">
            Free eBooks

          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
           Development Tutorial
          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
            How to - Blog
          </li>
          <li className="text-gray-600 hover:text-gray-800 mb-4">
            Youtube Playlist
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
  <div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-between">
    {/* Footer Text */}
    <p className="text-gray-500 text-sm text-center sm:text-left">
      Shop.co © 2000-2023, All Rights Reserved
    </p>
    
    {/* Footer Images */}
    <div className="flex space-x-4 mt-2 sm:mt-0">
      <Image src="/Badge.png" width={46.61} height={30.03} alt="Badge 1" />
      <Image src="/Badge (1).png" width={46.61} height={30.03} alt="Badge 2" />
      <Image src="/Badge (2).png" width={46.61} height={30.03} alt="Badge 3" />
      <Image src="/Badge (3).png" width={46.61} height={30.03} alt="Badge 4" />
      <Image src="/Badge (4).png" width={46.61} height={30.03} alt="Badge 5" />
    </div>
  </div>
</div>

</footer>

    </div>
  )
}

export default Footer
