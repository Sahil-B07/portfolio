import { hero } from "@/constants/constants";
import { motion } from "framer-motion";
import useIntersection from "@/utils/useIntersection";

import Cursor from "./Cursor";

const Hero = ({ myFont }) => {
  Cursor();
  const inViewport = useIntersection();

  return (
    <section
      id="hero"
      className="h-screen w-full p-4 flex relative magicpattern"
    >
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
      {/* description */}
      <div className="flex h-screen w-full p-2 z-10">
        <div
          id="info"
          data-scroll
          data-scroll-speed="0.2"
          className="col-span-full self-center text-center p-2 w-full justify-center"
        >
          <h1 className="text-[4rem]">
            <span className={myFont.sora.className}>{hero.name}</span>
          </h1>
          <p className={`${myFont.hanken.className} text-lg`}>{hero.desc} <span className="font-mono">:)</span> </p>
        </div>
      </div>
      <div className="w-full h-full bg-gradient-to-t from-white absolute bottom-0 left-0"></div>
    </section>
  );
};

export default Hero;
