

import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltax = mouseX - window.innerWidth / 2;
      let deltay = mouseY - window.innerHeight / 2;

      // Calculate the angle for the rotation
      var angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setRotate(angle - 180); // Adjust so the pupil rotates correctly
    });
  });

  return (
    <div data-scroll data-scroll-speed="-.6" className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* Left Eye */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-6 h-6 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-6 h-6 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;