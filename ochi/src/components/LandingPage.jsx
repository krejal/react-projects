import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=" w-full h-screen  pt-1 ">
      <div className="textstructure mt-48 px-20 ">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex overflow-hidden items-end">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1] }}
                    className="rounded-md mr-2 w-[8vw] h-[5vw] -top-[1vw] relative bg-[url('data:image/png;base64,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')] bg-cover bg-center "
                  ></motion.div>
                )}
                <h1 className="uppercase text-[7vw] leading-[6.5vw] tracking-tighter  font-semibold font-founders-grotesk">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-[1px] border-zinc-500 mt-20 flex justify-between items-center font-light py-3 px-20 font-neue-montreal">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md  tracking-tight leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-4 py-1 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase ">
            start the porject
          </div>
          <div className="w-10 h-8 border-[2px] flex items-center justify-center border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              {" "}
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;