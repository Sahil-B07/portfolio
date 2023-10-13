"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Background from "./Background";
import { Kaisei_Opti } from "next/font/google";

const myFont = Kaisei_Opti({
  weight: "400",
  subsets: ["latin"],
});

const Parallax = () => {
  let ref = useRef();
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y1 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  let y2 = useTransform(scrollYProgress, [0, 1], ["0%", "370%"]);

  const [Y, setY] = useState(0);

  useEffect(() => {
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
        <motion.div
          ref={ref}
          className="p-[2rem] top-0 -z-10 flex h-[120vh] w-full items-center justify-center"
          style={{ y: y1 }}
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
        </motion.div>
        <motion.div
          className="absolute z-20 top-[40vh] self-center"
          style={{ y: y2 }}
        >
          <h1
            id="hero_name"
            className="text-stroke-3 p-3 text-7xl font-extrabold text-white"
          >
            <span className={myFont.className}>サヒル</span>
          </h1>
        </motion.div>

        <div className="absolute bottom-0 -z-10 h-[10vh] w-full bg-gradient-to-t from-black"></div>
      </div>

      {/* section-2 */}
      <div className="relative z-20 bg-black p-[4rem]" id="paras">
        <div className="relative h-screen -mt-[35vh] rounded-md border-2 border-[#dcdada] bg-[#dcdada] p-[2rem] text-justify">
          <AnimatePresence>
            {Y >= "500" && (
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
