import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Contact = ({ myFont }) => {
  const HeadRef = useRef();
  const ParaRef = useRef();
  let scrollYProgress1  = useScroll({
    target: HeadRef,
    offset: ["start start", "end start"],
  });
  let scrollYProgress2  = useScroll({
    target: ParaRef,
    offset: ["start start", "end start"],
  });
  let s1 = useTransform(scrollYProgress1.scrollYProgress, [0, 1], [5, 600]);
  let s2 = useTransform(scrollYProgress2.scrollYProgress, [0,1], [0, 1]);

  return (
    <>
      <section className="h-full" id="projects">
        <div ref={HeadRef} className="grid grid-rows-2 relative h-[600vh] ">
          <div className="sticky overflow-hidden flex top-0 h-[100vh] w-full justify-center items-center bg-black">
            <motion.div
              style={{ scale: s1, originX: 0.6 }}
              className="text-white text-6xl"
            >
              <motion.h1 className={`${myFont.hanken.className} select-none`}>
                Projects
              </motion.h1>
            </motion.div>
          </div>
        </div>
        {/* part 2 */}
        <div className="h-full">
          <div
          ref={ParaRef}
            className="h-[100vh] w-full p-[1rem]"
          >
            <motion.div
            style={{ opacity: s2 }}
             className="sticky w-full h-full bg-black rounded-md grid grid-cols-10 overflow-hidden justify-center items-center">
              <div className="col-span-4 bg-amber-300"></div>
              <div className="col-start-5 col-span-6 bg-lime-400"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
