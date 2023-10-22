import { fadeAni, pathAni } from "@/constants/animate";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const HeadSet = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    margin: "-10%",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.svg
      ref={ref}
      width="100%"
      viewBox="0 0 226 312"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={pathAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M109.5 57L111.5 3L152 13L151.528 71"
        stroke="white"
        strokeWidth="5"
        strokeLinejoin="bevel"
        className={'animate-pulse'}
      />
      <motion.circle
        variants={fadeAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        cx="104.5"
        cy="56.5"
        r="7.5"
        fill="white"
        className={'animate-pulse'}
      />
      <motion.circle
        variants={fadeAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        cx="146.5"
        cy="71.5"
        r="7.5"
        fill="white"
        className={'animate-pulse'}
      />
      <motion.circle
        variants={fadeAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        cx="177.5"
        cy="97.5"
        r="7.5"
        fill="white"
        className={'animate-pulse'}
      />
      <motion.path
        variants={pathAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M182.5 97L188 44L199 49"
        stroke="white"
        strokeWidth="5"
        strokeLinejoin="bevel"
        className={'animate-pulse'}
      />
      <motion.circle
        variants={fadeAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        cx="209.918"
        cy="105.082"
        r="4.91803"
        fill="white"
        className={'animate-pulse'}
      />
      <motion.path
        variants={pathAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M213.197 104.754L216.803 70L224.016 73.2787"
        stroke="white"
        strokeWidth="5"
        strokeLinejoin="bevel"
        className={'animate-pulse'}
      />
      <motion.path
        variants={pathAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M47.5001 254.5C35.1001 233.3 40.0001 199 43.0001 183.5C46.8776 143.756 109.485 112.469 137 126.53M47.5001 254.5C54.6668 255.833 70.6001 265.7 69.0001 286.5C67.6668 295 60.0001 312 43.0001 310M47.5001 254.5C59.6668 266.833 75.8001 295.2 43.0001 310M43.0001 310C36.1668 310 20.5001 305.7 12.5001 300.5C2.50014 294 -7.50001 260.5 21.0001 251.5C13.6667 198.667 25.4001 97.8 131 117C140.056 119.734 154.201 127.285 166.753 141M137 126.53C137.869 126.974 138.704 127.464 139.5 128C160.3 142 168.167 180.5 169.5 198C162.7 201.6 157.167 212 156 217.5C151.6 237.1 169.333 246.833 178 248.5C194.4 252.1 206.5 241.333 210.5 235.5C217.7 215.9 201.5 202.333 192.5 198C189.186 172.655 178.689 154.041 166.753 141M137 126.53L166.753 141"
        stroke="white"
        strokeWidth="3.5"
      />
      <motion.path
        variants={pathAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M27.9606 282.789L28.4343 270L38.0264 272.368L37.9147 286.105"
        stroke="white"
        strokeWidth="2.5"
        strokeLinejoin="bevel"
      />
      <motion.circle
        variants={fadeAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        cx="26.5001"
        cy="283.395"
        r="2.5"
        fill="white"
      />
      <motion.circle
        variants={fadeAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        cx="36.4475"
        cy="286.947"
        r="2.5"
        fill="white"
      />
      <motion.path
        variants={pathAni}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M175.5 238.5C165.9 232.9 171.5 218.833 175.5 212.5C194.5 208 196.5 224.5 197.5 230C198.5 235.5 187.5 245.5 175.5 238.5Z"
        stroke="white"
        strokeWidth="1.8"
      />
    </motion.svg>
  );
};

export default HeadSet;
