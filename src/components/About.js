import { aboutMe } from "@/constants/constants";
import { useEffect, useState } from "react";
import Laptop from "./Doodles/Laptop";
import Manga from "./Doodles/Manga";
import HeadSet from "./Doodles/HeadSet";
import { motion } from "framer-motion";
import { typinAni } from "@/constants/animate";
import MathDivider from "./Doodles/MathDivider";
import SetSquare from "./Doodles/SetSquare";

const About = ({ myFont }) => {
  const [navH, setNavH] = useState(0);

  useEffect(() => {
    const height = document.getElementById("navbar").offsetHeight;
    setNavH(height);
  }, []);

  return (
    <section id="about" className="p-4 relative bg-[#000000]">
      <div className="flex w-full h-full relative p-4 mt-[5rem] ">
        {/* left */}
        <div
          className={`w-[50%] h-[100vh] flex justify-center items-center sticky top-0 mt-[${navH}px]`}
        >
          <h1 className="text-3xl text-[#46e0ff] text-center mt-10">
            <span className={`${myFont.hanken.className} !font-bold`}>
              About Me
            </span>
          </h1>
        </div>

        {/* right */}
        <div className={`w-full h-full mt-[${navH}px] relative`}>
          {/* section 1 */}
          <div className="h-[60vh] flex flex-col p-4 justify-center text-white relative">
            <div className="grid grid-cols-7 gap-2">
              <h1
                data-scroll
                data-scroll-speed="0.1"
                className={`${myFont.hanken.className} col-start-2 text-2xl font-bold col-span-5`}
              >
                {aboutMe.head}
              </h1>
              <p
                data-scroll
                data-scroll-speed="0.2"
                className={`${myFont.sora.className} col-start-2 col-span-4`}
              >
                {aboutMe.p1}
              </p>
            </div>
            <span className="object-cover w-[25vw] h-fit absolute right-[4%] top-[5%] opacity-50 ">
              <Laptop />
            </span>
          </div>
          {/* section 2 */}
          <div className="h-[60vh] flex flex-col p-4 justify-center text-white relative">
            <div
              data-scroll
              data-scroll-speed="0.2"
              className="z-10 grid grid-cols-7 gap-2"
            >
              <p
                className={`${myFont.sora.className} relative col-start-3 col-span-4`}
              >
                {aboutMe.p2}
              </p>
            </div>
            <div className="z-0 object-cover scale-[0.7] h-fit absolute rotate-[20deg] right-0 top-[10%] opacity-40">
              <MathDivider />
            </div>
            <div className="z-0 object-cover scale-[0.7] h-fit absolute -left-[4%] bottom-[20%] opacity-70">
              <SetSquare />
            </div>
          </div>
          {/* section 3 */}
          <div className="h-[60vh] w-full flex flex-col relative justify-center text-white">
            <div className="grid grid-cols-7 gap-2">
              <motion.h1
              initial="hidden"
              whileInView='visible'
              viewport={{once:true}}
              variants={typinAni}
              transition={{duration:4, delay:1, type:"tween" }}
                data-scroll
                data-scroll-speed="0.2"
                className={`${myFont.hanken.className} overflow-hidden whitespace-nowrap col-start-2 text-2xl font-bold col-span-5`}
              >
                {aboutMe.h1}
              </motion.h1>
              <p
                data-scroll
                data-scroll-speed="0.2"
                className={`${myFont.sora.className} col-start-2 col-span-4`}
              >
                {aboutMe.p3}
              </p>
            </div>
            <span className="object-cover scale-[.6] h-fit absolute -left-[10%] -top-[15%] opacity-50">
              <Manga />
            </span>
            <span className="object-cover scale-[.7] h-fit absolute right-[5%] bottom-[5%] opacity-50">
              <HeadSet />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
