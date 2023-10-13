"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Parallax from "@/components/Parallax";
import { Sora, Hanken_Grotesk } from "next/font/google";
import { useEffect } from "react";

const sora = Sora({
  weight: "400",
  subsets: ["latin"],
});
const hanken = Hanken_Grotesk({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        },
      });
    })();
  }, []);

  return (
    <>
      <Navbar myFont={{ sora }}/>
      <Hero myFont={{ sora, hanken }} />
      <Parallax />
    </>
  );
}
