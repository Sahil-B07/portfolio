"use client";;
import { gridAni } from "@/constants/constants";
import { motion } from "framer-motion";

const Background = () => {
  const hor = 14;
  const ver = 20;

  return (
    <>
      <div
        className={`px-[1.5rem] grid h-full absolute w-full grid-col-1 divide-y-[1px] divide-dashed divide-[#ffffffa9] `}
      >
        {[...Array(hor)].map((e, i) => (
          <motion.div
            variants={gridAni}
            initial={"hiddem"}
            animate={"visible"}
            transition={{
              duration: 2,
              delay: 0.05 + i / 10,
              ease: "easeInOut",
            }}
            id="row"
            className={`gridLines`}
            key={i}
          ></motion.div>
        ))}
      </div>

      <div
        animate={{}}
        className={`py-[1.5rem] grid grid-flow-col h-full absolute w-full auto-cols-[minmax(0,_2fr)] divide-x-[1px] divide-dashed divide-[#ffffffa9] `}
      >
        {[...Array(ver)].map((e, i) => (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 0.7,
              height: "auto",
              transition: {
                duration: 2,
                delay: 0.07 + i / 10,
                ease: "easeInOut",
              },
              borderColor: "#ffffffa9",
              transitionEnd: { opacity: 1, ease: "easeInOut" },
            }}
            className={`gridLines`}
            id="col"
            key={i}
          ></motion.div>
        ))}
      </div>
      {/* fades */}
      <div className="w-full h-14 absolute top-[1.4rem] bg-gradient-to-b from-black"></div>
      <div className="w-16 h-[104vh] left-[1.4rem] absolute  bg-gradient-to-r from-black"></div>
      <div className="w-16 h-[104vh] right-[1.4rem] absolute  bg-gradient-to-l from-black"></div>
    </>
  );
};

export default Background;
