import { pathAni } from "@/constants/animate";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const Plane = () => {

  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, {
    margin: "-50%"
  })
  
    useEffect(() => {
        if(isInView){
            controls.start("visible")
        }
      }, [isInView])

  return (
    <motion.svg
            ref={ref}
            strokeWidth={2}
              className="object-cover w-[25vw] h-fit transform -scale-x-100 rotate-[40deg] absolute opacity-80 -top-[5rem] -left-[4rem] "
              width="548"
              height="266"
              viewBox="0 0 548 266"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={pathAni}
                initial="hidden"
                animate={controls}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay:0.5
                  }}
                d="M3.49983 167.5C-6.50017 167.5 45.9998 238.5 58.9998 256C61.9997 257 112.5 225.5 113.5 225.5M3.49983 167.5C13.4998 167.5 135.5 203 140 211.5L118.5 220.5M3.49983 167.5L118.5 220.5M3.49983 167.5L113.5 225.5M118.5 220.5C118.5 221.833 118.5 224.7 118.5 225.5C118.5 226.5 114.5 225.5 113.5 225.5"
                stroke="white"
                strokeWidth="4"
              />
              <motion.path
                variants={pathAni}
                initial="hidden"
                animate={controls}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}

                d="M138.5 244.5C243.167 283.833 471.3 290.2 546.5 1"
                stroke="white"
                strokeWidth="3"
                stroke-dasharray="16 12"
              />
            </motion.svg>
  )
}

export default Plane