"use client";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";

import Background from "./Background";

const Parallax = () => {

  const [Y, setY] = useState(0);
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setOffset(document.getElementById('para').offsetHeight + 500)
    window.addEventListener("scroll", () => {
      setY(window.scrollY);
    });
  }, []);

  return (
    <>
      <div
        id="contact"
        className="relative flex flex-col justify-center bg-black z-10"
      >
        <div
        data-scroll
        data-scroll-speed='0.3'
          className="p-[2rem] top-0 -z-10 flex h-[120vh] w-full items-center justify-center"
        >
          <Background />
          {/* <Image
            className="absolute top-0 h-[120vh] w-full object-cover"
            src={"/jp1.png"}
            quality={100}
            width={1}
            height={1}
            sizes="100vw"
          /> */}
        </div>
        <div
        data-scroll
        data-scroll-speed='0.5'
          className="absolute z-20 top-[40vh] self-center"
        >
          <h1
            id="hero_name"
            className="text-stroke-3 p-3 text-7xl font-extrabold text-white"
          >
            <span>サヒル</span>
          </h1>
        </div>

        <div className="absolute bottom-0 -z-10 h-[10vh] w-full bg-gradient-to-t from-black"></div>
      </div>

      {/* section-2 */}
      <div className="relative z-20 bg-black p-[4rem]" id="para">
        <div className="relative h-screen -mt-[35vh] rounded-md border-2 border-[#dcdada] bg-[#dcdada] p-[2rem] text-justify">
          <AnimatePresence>
            {Y >= offset && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 0, transition: { duration: 1.5 } }}
                className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-r from-[#ff2773] via-[#ff00bb] to-[#a600ff] opacity-75 blur-xl"
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Parallax;
