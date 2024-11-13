import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=" w-full rounded-tr-3xl rounded-tl-3xl py-20  bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-400 flex gap-12 tracking-tighter whitespace-nowrap text-white">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear",repeat:Infinity, duration: 10 }} className="text-[24vw] leading-none tracking-tighter font-founders-grotesk pt-1 -mb-[1vw] uppercase font-bold pr-20">
          We are ochi
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease : "linear",repeat:Infinity, duration: 10 }} className="text-[24vw] leading-none tracking-tighter font-founders-grotesk pt-1 -mb-[1vw] uppercase font-bold pr-20">
          We are och5
        </motion.h1>
      
      </div>
    </div>
  );
}

export default Marquee;
