"use client";

import HeroBanner from "@/components/heroBanner";

import SpeakerBox from "@/components/speakerBox";
import { instagram, linkedin, ticketsLink } from "@/datasets/links";
import { speakers } from "@/datasets/speakers";
import Link from "next/link";
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
    <>
      <section className="w-full h-screen flex flex-col justify-center align-middle gap-5 md:gap-10 lg:pb-52 -mt-24 md:mt-0 md:pt-14 bg-beige ">
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
        className="w-full min-h-screen py-[64px] px-10 2xl:px-32 bg-beige flex flex-col justify-center items-center"
      >
        <h2 className="text-center text-xl lg:text-3xl mb-10 lg:mb-20">
          Meet the speakers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10 gap-x-0 md:gap-10">
          {speakers.map((speaker) => (
            <SpeakerBox key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>
      <section
        id="panels"
        className="w-full min-h-screen py-[64px] bg-red flex flex-col justify-center items-center text-beige"
      >
        <h2 className="text-center text-xl lg:text-3xl mb-10 lg:mb-20">
          Panels
        </h2>
        <p>To be announced soon</p>
      </section>
      <section
        id="contact"
        className="w-full min-h-screen py-[64px] bg-beige flex flex-col justify-center items-center gap-10 lg:gap-20"
      >
        <h2 className="text-center text-xl lg:text-3xl">Get in touch</h2>
        <div className="w-4/5 xl:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* <Link href={facebook} className="link" target="_blank">
            <p className="text-xl">Facebook &#x2192;</p>
          </Link> */}
          <Link href={instagram} className="link" target="_blank">
            <p className="text-xl">Instagram &#x2192;</p>
          </Link>
          <Link href={linkedin} className="link" target="_blank">
            <p className="text-xl">LinkedIn &#x2192;</p>
          </Link>
        </div>

        <Link href={ticketsLink} target={"_blank"} className="button">
          <p className="navbar-link text-md xl:text-lg">
            Book your seat &#x2192;
          </p>
        </Link>
      </section>
    </>
  );
};

export default HomePage;
