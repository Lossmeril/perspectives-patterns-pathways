"use client";

import Image from "next/image";
import { getScaleFromIteration } from "./heroBanner";
import { Speaker } from "@/datasets/speakers";
import Link from "next/link";
import { useState, useEffect } from "react";

interface SpeakerBoxProps {
  speaker: Speaker;
}

const SpeakerBox: React.FC<SpeakerBoxProps> = ({ speaker }) => {
  const [boxSize, setBoxSize] = useState<number>(900);

  useEffect(() => {
    const getBreakpointValue = () => {
      const width = window.innerWidth;

      if (width < 640) return 15; // Mobile (sm)
      if (width < 768) return 15; // Tablet (md)
      if (width < 1024) return 15; // Small Laptop (lg)
      if (width < 1280) return 15; // Desktop (xl)
      return 20; // Large Screens (2xl)
    };

    setBoxSize(getBreakpointValue());

    const handleResize = () => {
      setBoxSize(getBreakpointValue());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <Link href={"/speaker/" + speaker.id}>
          <div
            className="w-60 xl:w-80 mx-auto aspect-square"
            style={{ backgroundColor: "var(--" + speaker.color + ")" }}
          >
            <div className="w-full h-full aspect-square bg-beige rounded-full relative overflow-hidden">
              <div
                className="aspect-square bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: getScaleFromIteration(boxSize, 2) + "rem",
                  transform: "translate(-50%, -50%) rotate(20deg)",
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
      <div className="text-center">
        <h3 className="mb-2">{speaker.name}</h3>
        <p className="mb-6">{speaker.role}</p>

        <Link href={"/speaker/" + speaker.id} className="link">
          <p>Read more &#x2192;</p>
        </Link>
      </div>
    </div>
  );
};

export default SpeakerBox;
