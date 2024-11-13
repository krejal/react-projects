
import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-16">
        <h1 className="text-7xl font-neue-montreal tracking-tighter">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute overflow-hidden flex z-[9] text-8xl left-full -translate-x-1/2 -translate-y-1/2 top-1/2 font-founders-grotesk font-bold uppercase tracking-tighter text-[#CDEA68] whitespace-nowrap scale-95">
                {"Cardboard Spaceship".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden z-[9] text-8xl right-full translate-x-1/2 -translate-y-1/2 top-1/2 font-founders-grotesk font-bold uppercase tracking-tighter text-[#CDEA68] whitespace-nowrap scale-95">
                {"AH2 & Matt Horn".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
