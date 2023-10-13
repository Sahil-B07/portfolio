"use client"
import { motion } from "framer-motion";
import React from "react";

const Background = () => {
  const hor = 10;
  const ver = 15;
  return (
    <section className="flex">
      <div
        className={`z-0 px-[2rem] grid h-full absolute w-full grid-col-1 divide-y-[1px] divide-dashed divide-gray-500 `}
      >
        {[...Array(hor)].map((e, i) => (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: 0.6,
              width: "auto",
              transition: { duration: 2, delay: 0.05 + i / 10, ease: "easeInOut" },
              borderColor: "white",
              transitionEnd: {opacity:1, duration:0,ease: "easeInOut"}
            }}
            onTransitionEnd={{opacity:1, duration:0,ease: "easeInOut"}}
            id="row"
            className="gridLines divide-[linear-gradient(10deg,#AF8800_4.03%,#AA9F1F_6.02%,#A7B334_6.01%)]"
            key={i}
          ></motion.div>
        ))}
      </div>

      <motion.div
      animate={{
      }}
        className={`z-0 py-[2rem] grid grid-flow-col h-full absolute w-full auto-cols-[minmax(0,_2fr)] divide-x-[1px] divide-dashed divide-gray-500 `}
      >
        {[...Array(ver)].map((e, i) => (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 0.7,
              height: "auto",
              transition: { duration: 2, delay: 0.07 + i / 10,ease: "easeInOut" },
              borderColor:'white',
              transitionEnd: {opacity:1, duration:0,ease: "easeInOut"}
            }}
            className="gridLines"
            id="col"
            key={i}
          ></motion.div>
        ))}
      </motion.div>

      <div className="absolute h-[30vh] w-full bottom-0 bg-gradient-to-t from-black"></div>
      <div className="absolute h-full w-[20vh] bg-gradient-to-r from-black"></div>
      <div className="absolute h-full w-[20vh] top-0 right-0 bg-gradient-to-l from-black"></div>
      <div className="absolute h-[30vh] w-full top-0 bg-gradient-to-b from-black"></div>
    </section>
  );
};

export default Background;



// offset = [ container, window ]
// animate-[animationName_easingFunction_durationInSeconds_iterationsCount_delayInSeconds_direction]
{
  /* Vingnette filter */
}
{
  /* <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-black"></div> */
}
{
  /* <div class="absolute -inset-1 -z-20 rounded-lg bg-gradient-to-r from-[#ff2773] via-[#ff00bb] to-[#a600ff] opacity-75 blur-xl"></div> */
}