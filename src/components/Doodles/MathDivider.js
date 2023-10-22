import { fadeAni } from "@/constants/animate";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const MathDivider = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    margin: "-1px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.svg
      ref={ref}
      width="131"
      viewBox="0 0 131 247"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        cx="68.5"
        cy="48.5"
        r="24"
        stroke="white"
        strokeWidth="3"
      />
      <motion.circle
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        cx="68.5"
        cy="48.5"
        r="9"
        stroke="white"
        strokeWidth="3"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M7 241.5L18.5 232L69.5 74.5L60 71L55.5 68.5L51.5 65L2.5 227L7 241.5ZM7 241.5L5.5 246.5M125 238.5L129 227L85.5 66L78 70.5L69.5 72.5L112.5 232L125 238.5ZM125 238.5L126.5 243.5M62.5002 25.5C62.3335 20 62.1002 8.30001 62.5002 5.50001C63.0002 2.00001 73.5 1.00001 76.5 4.50001V25.5H62.5002Z"
        stroke="white"
        strokeWidth="3"
      />
    </motion.svg>
  );
};

export default MathDivider;
