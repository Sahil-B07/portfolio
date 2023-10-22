import { pathAni, fadeAni } from "@/constants/animate";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Laptop = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    margin: "-25%",
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
      viewBox="0 0 361 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial="hidden"
        animate={controls}
        variants={fadeAni}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        d="M359 185.866H360.25C360.25 185.817 360.247 185.769 360.242 185.721L359 185.866ZM335.944 200.755L335.729 201.986L335.944 200.755ZM254.666 141.637C261.134 137.562 271.739 133.832 282.504 135.784C293.161 137.717 304.249 145.27 311.724 164.3L314.051 163.386C306.32 143.705 294.612 135.439 282.95 133.324C271.396 131.229 260.159 135.222 253.334 139.522L254.666 141.637ZM313.819 164.676C316.19 162.024 319.876 160.508 324.265 160.162C328.646 159.817 333.622 160.653 338.395 162.587C347.962 166.464 356.425 174.619 357.758 186.011L360.242 185.721C358.771 173.163 349.475 164.38 339.334 160.27C334.253 158.211 328.889 157.291 324.069 157.67C319.257 158.049 314.881 159.736 311.955 163.01L313.819 164.676ZM357.75 185.866C357.75 189.4 354.976 193.24 350.647 196.051C346.363 198.833 340.915 200.354 336.159 199.523L335.729 201.986C341.254 202.951 347.334 201.182 352.008 198.148C356.637 195.143 360.25 190.641 360.25 185.866H357.75ZM336.159 199.523C314.031 195.66 307.01 176.533 313.97 164.468L311.805 163.219C303.809 177.077 312.234 197.884 335.729 201.986L336.159 199.523ZM312.755 165.086C315.555 165.385 320.074 166.335 324.421 168.202C328.792 170.08 332.8 172.805 334.847 176.541L337.04 175.34C334.6 170.887 329.988 167.873 325.407 165.905C320.801 163.926 316.035 162.922 313.02 162.6L312.755 165.086Z"
        fill="pink"
        className={'animate-pulse'}
      />
      <motion.path
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        variants={pathAni}
        d="M4.5 61L173.5 2.5V128M4.5 61V190M4.5 61L2 189C2.5 189.333 3.6 190 4 190L4.5 193C4.9 193.4 90 229.833 132.5 248C133.5 248 295.5 177 296 176.5C296.4 176.1 296.5 174.333 296.5 173.5M173.5 128L296.5 173.5M173.5 128L4.5 190M296.5 173.5L133 245.5L4.5 190"
        stroke="white"
        strokeWidth="1.5"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        variants={pathAni}
        d="M133 245.5C133 246.333 132.9 248 132.5 248"
        stroke="white"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        variants={pathAni}
        d="M18 67.5L165.5 15.5V117L18 173.5V79"
        stroke="white"
        strokeWidth="1.5"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        variants={pathAni}
        d="M104.5 148C104.5 149.311 103.232 150.5 101.5 150.5C99.7681 150.5 98.5 149.311 98.5 148C98.5 146.689 99.7681 145.5 101.5 145.5C103.232 145.5 104.5 146.689 104.5 148Z"
        fill="#C4C4C4"
        stroke="white"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        variants={pathAni}
        d="M177 140.5L50.5 190L119 219L244.5 167L177 140.5Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <motion.path
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        variants={pathAni}
        d="M161.844 206.391L210.016 187.798L228.395 194.074L179.516 214.679L161.844 206.391Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <line
        x1="68.0995"
        y1="187.771"
        x2="121.1"
        y2="210.771"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="80.0995"
        y1="182.771"
        x2="133.1"
        y2="205.771"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="92.0995"
        y1="177.771"
        x2="145.1"
        y2="200.771"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="104.1"
        y1="172.771"
        x2="157.1"
        y2="195.771"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="116.1"
        y1="167.771"
        x2="169.1"
        y2="190.771"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="128.1"
        y1="162.771"
        x2="181.1"
        y2="185.771"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="140.1"
        y1="157.771"
        x2="193.1"
        y2="180.771"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="152.1"
        y1="152.771"
        x2="205.1"
        y2="175.771"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="164.1"
        y1="147.771"
        x2="217.1"
        y2="170.771"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="75.9045"
        y1="191.769"
        x2="179.904"
        y2="148.769"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="84.9064"
        y1="194.768"
        x2="188.906"
        y2="152.768"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="93.9045"
        y1="198.769"
        x2="197.904"
        y2="155.769"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="102.905"
        y1="202.769"
        x2="207.905"
        y2="159.769"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="111.905"
        y1="206.769"
        x2="216.905"
        y2="163.769"
        stroke="white"
        strokeWidth="0.5"
      />
      <line
        x1="120.904"
        y1="210.769"
        x2="226.904"
        y2="166.769"
        stroke="white"
        strokeWidth="0.5"
      />
    </motion.svg>
  );
};

export default Laptop;
