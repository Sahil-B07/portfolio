import { fadeAni } from "@/constants/animate";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SetSquare = () => {
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
      width="220"
      height="144"
      viewBox="0 0 220 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M42 141C36 139.8 15.8333 48.1667 6.5 2.5C13.5 2.5 215.5 88 217.5 94.5C219.5 101 49.5 142.5 42 141Z"
        stroke="pink"
        strokeWidth="4"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M15.808 22.2399L26.0345 10.4968"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M15.8165 13.6699L20.8679 8.14447"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M10.1577 11.2296L15.209 5.70413"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M34.6381 22.0351L39.6894 16.5096"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M28.9792 19.5948L34.0306 14.0693"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M58.2577 31.9724L63.309 26.447"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M52.5988 29.5321L57.6502 24.0067"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M81.0169 41.0416L86.0682 35.5162"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M75.3581 38.6013L80.4094 33.0758"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M103.776 50.1108L108.827 44.5854"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M98.1172 47.6705L103.169 42.145"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M128.504 59.532L133.555 54.0065"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M122.845 57.0916L127.896 51.5662"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M151.139 69.2933L156.191 63.7679"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M145.48 66.853L150.532 61.3275"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M173.774 79.0546L178.826 73.5291"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M168.116 76.6143L173.167 71.0888"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M196.409 88.8158L201.46 83.2903"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M190.751 86.3757L195.802 80.8502"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M39.0594 31.3971L49.2859 19.654"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M62.3107 40.5542L72.5371 28.8111"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M85.4381 50.4036L95.6645 38.6605"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M108.69 59.5607L118.916 47.8177"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M131.817 69.41L142.043 57.667"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M154.944 79.2594L165.171 67.5163"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M177 88.4166L187.226 76.6735"
        stroke="pink"
        strokeWidth="0.9"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M201.323 100.151L211.55 88.4081"
        stroke="pink"
        strokeWidth="0.9"
      />
    </motion.svg>
  );
};

export default SetSquare;
