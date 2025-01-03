import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";

const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[28px] leading-[32px] font-extrabold text-black md:text-5xl mb-8 md:mb-14 capitalize"
        >
          BROWSE BY DRESS STYLE
        </motion.h2>

        {/* First image row */}
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0 mb-4 sm:mb-5"
        >
          <div className="flex-1">
            <Image
              src="/Frame 61.png"
              width={407}
              height={289}
              alt="Dress Style 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/Frame 62.png"
              width={629}
              height={289}
              alt="Dress Style 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Second image row */}
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0"
        >
          <div className="flex-1">
            <Image
              src="/Frame 64.png"
              width={629}
              height={289}
              alt="Dress Style 3"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/Frame 63.png"
              width={407}
              height={289}
              alt="Dress Style 4"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;
