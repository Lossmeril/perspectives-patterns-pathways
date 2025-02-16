"use client";

import HeroBanner from "@/components/heroBanner";
import Navbar from "@/components/navbar";
import SpeakerBox from "@/components/speakerBox";
import { speakers } from "@/datasets/speakers";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [inScale, setInScale] = useState<number>(900);

  useEffect(() => {
    const getBreakpointValue = () => {
      const width = window.innerWidth;

      if (width < 640) return 350; // Mobile (sm)
      if (width < 768) return 500; // Tablet (md)
      if (width < 1024) return 600; // Small Laptop (lg)
      if (width < 1280) return 800; // Desktop (xl)
      return 900; // Large Screens (2xl)
    };

    setInScale(getBreakpointValue());

    const handleResize = () => {
      setInScale(getBreakpointValue());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inRot = -240;

  return (
    <main className="max-w-screen overflow-x-hidden">
      <section className="w-full h-screen bg-beige pb-10 lg:pb-32 pt-10 flex flex-col justify-center align-middle gap-10">
        <Navbar />
        <HeroBanner initialRotation={inRot} initialScale={inScale} />
        <div className="p-5 w-full text-center">
          <h1 className="text-3xl lg:text-[2em] xl:text-[2.75rem] mb-5 leading-10 xl:leading-[4rem]">
            Perspectives, patterns and pathways
          </h1>
          <div className="w-3/4 mx-auto flex flex-col lg:flex-row justify-between gap-y-5">
            <p className="m-0 text-md lg:text-xl">MRes academic conference</p>
            <p className="m-0 text-md lg:text-xl">
              1 / 4 / 2025 | 11:30 AM — 4:00 PM
            </p>
            <p className="m-0 text-md lg:text-xl">
              Sandyford building 405, Northumbria University
            </p>
          </div>
        </div>
      </section>
      <section
        id="speakers"
        className="w-full min-h-screen py-[64px] bg-beige flex flex-col justify-center items-center"
      >
        <h2 className="text-center text-3xl mb-20">Meet the speakers</h2>
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {speakers.map((speaker) => (
            <SpeakerBox key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
