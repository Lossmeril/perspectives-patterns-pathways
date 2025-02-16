"use client";

import Image from "next/image";
import { getScaleFromIteration } from "./heroBanner";
import { Speaker } from "@/datasets/speakers";
import Link from "next/link";

interface SpeakerBoxProps {
  speaker: Speaker;
}

const SpeakerBox: React.FC<SpeakerBoxProps> = ({ speaker }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <div
          className="w-60 aspect-square"
          style={{ backgroundColor: "var(--" + speaker.color + ")" }}
        >
          <div className="w-full h-full aspect-square bg-beige rounded-full relative">
            <div
              className="aspect-square bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: getScaleFromIteration(15, 2) + "rem",
                transform: "translate(-50%, -50%) rotate(20deg)",
              }}
            >
              <div className="w-full h-full aspect-square bg-beige rounded-full relative overflow-hidden">
                <Image
                  src="/img/speakers/michal.webp"
                  alt={speaker.name}
                  fill
                  className="object-cover mix-blend-luminosity"
                  style={{ transform: "rotate(-20deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="mb-2">{speaker.name}</h3>
        <p className="mb-6">{speaker.role}</p>

        <Link href={"/speaker/" + speaker.id}>
          <p>Read more &#x2192;</p>
        </Link>
      </div>
    </div>
  );
};

export default SpeakerBox;
