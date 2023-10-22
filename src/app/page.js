"use client";;
import { Sora, Hanken_Grotesk, Kalam, Kaisei_Opti } from "next/font/google";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";

const sora = Sora({
  weight: "400",
  subsets: ["latin"],
});
const hanken = Hanken_Grotesk({
  weight: "variable",
  subsets: ["latin"],
});
const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
});
const kaisei = Kaisei_Opti({
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
      <Navbar myFont={{ sora, kalam }}/>
      <Hero myFont={{ sora, hanken }} />
      <About myFont={{ sora, hanken }}/>
      <Contact myFont={{ sora, hanken, kaisei }}/>
    </>
  );
}
