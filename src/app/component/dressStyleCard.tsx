"use client"; // Client-side rendering for event handlers

import React, { useEffect, useState } from "react";

type DressStyleCardProps = {
  title: string;
  url: string;
  className?: string; // Add className here as an optional string
};

const DressStyleCard = ({ title, url, className }: DressStyleCardProps) => {
  const [mounted, setMounted] = useState(false);

  // Set the state to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render the component once it's mounted to avoid hydration mismatch
  if (!mounted) return null;

  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full md:h-full rounded-[20px] bg-white bg-top text-left py-4 px-6 bg-no-repeat bg-cover transition-all duration-300 
      ${className}`} // Using className prop here
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h3 className="text-2xl md:text-4xl font-bold text-black sm:text-center">{title}</h3>
    </div>
  );
};

export default DressStyleCard;
