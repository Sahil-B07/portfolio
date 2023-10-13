import React from "react";
import Cursor from "./Cursor";
import { motion } from "framer-motion";
import useIntersection from "@/utils/useIntersection";
import { hero } from "@/constants/constants";

const Hero = ({ myFont }) => {
  Cursor();
  const inViewport = useIntersection();

  return (
    <section id="hero" className="h-screen w-full p-4 flex magicpattern">
      {/* custom cursor */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        id="blob"
        className={`bg-gradient-to-r from-[#25e5d8] to-[#f34bf3] z-0 ${
          inViewport ? "visible" : "hidden"
        }`}
      ></motion.div>
      {/*  */}
      <div className="flex h-full p-2 z-10">
        <div id="info" className="col-span-full flex p-2 w-full">
          <div className="mt-[25%] ml-[10%]" data-scroll data-scroll-speed='0.2' >
            <h1 className="text-[4rem]">
              <span className={myFont.sora.className}>{hero.name}</span>
            </h1>
            <p className={`${myFont.sora.className}`}>{hero.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
