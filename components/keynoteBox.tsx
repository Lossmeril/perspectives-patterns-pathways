"use client";

import Image from "next/image";
import { getScaleFromIteration } from "./heroBanner";
import { Speaker } from "@/datasets/speakers";
import Link from "next/link";
import { useState, useEffect } from "react";
import Balancer from "react-wrap-balancer";

interface KeynoteBoxProps {
  speaker: Speaker;
}

const KeynoteBox: React.FC<KeynoteBoxProps> = ({ speaker }) => {
  const [boxSize, setBoxSize] = useState<number>(900);

  useEffect(() => {
    const getBreakpointValue = () => {
      const width = window.innerWidth;

      if (width < 640) return 10; // Mobile (sm)
      if (width < 768) return 10; // Tablet (md)
      if (width < 1024) return 15; // Small Laptop (lg)
      if (width < 1280) return 15; // Desktop (xl)
      return 15; // Large Screens (2xl)
    };

    setBoxSize(getBreakpointValue());

    const handleResize = () => {
      setBoxSize(getBreakpointValue());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-8 bg-red p-8 mb-5 col-span-2 lg:col-span-3 xl:col-span-4">
      <div className="w-60">
        <Link href={"/speaker/" + speaker.id}>
          <div
            className="w-40 md:w-60 xl:w-60 mx-auto aspect-square"
            style={{ backgroundColor: "#e9ead1CC" }}
          >
            <div className="w-full h-full aspect-square bg-red rounded-full relative overflow-hidden">
              <div
                className="aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: getScaleFromIteration(boxSize, 2) + "rem",
                  transform: "translate(-50%, -50%) rotate(20deg)",
                  backgroundColor: "#e9ead1CC",
                }}
              >
                <div className="w-full h-full aspect-square bg-beige rounded-full relative overflow-hidden">
                  <Image
                    src={"/img/speakers/" + speaker.id + ".webp"}
                    alt={speaker.name}
                    width={500}
                    height={500}
                    className="object-cover mix-blend-luminosity hover:mix-blend-normal"
                    style={{ transform: "rotate(-20deg)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="text-center lg:text-left text-beige flex flex-col justify-center">
        <div className="text-lg lg:text-2xl font-bold hothouse mb-3">
          Keynote speaker
        </div>
        <h3 className="text-xl speaker mb-3">
          {speaker.name}
          {speaker.pronouns ? (
            <span className="ml-2 text-xs opacity-50">
              {"(" + speaker.pronouns + ")"}
            </span>
          ) : (
            <></>
          )}
        </h3>

        <p className="text-xs md:text-xs mb-3">
          <Balancer>{speaker.bio}</Balancer>
        </p>
        <Link
          href={"/speaker/" + speaker.id}
          className="link keynote text-sm md:text-md mx-0"
        >
          <p>Read more &#x2192;</p>
        </Link>
      </div>
    </div>
  );
};

export default KeynoteBox;
