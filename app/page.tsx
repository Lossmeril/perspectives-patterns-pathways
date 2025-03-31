"use client";

import HeroBanner from "@/components/heroBanner";

import SpeakerBox from "@/components/speakerBox";
import { instagram, linkedin, ticketsLink } from "@/datasets/links";
import { panels } from "@/datasets/panels";
import { keynoteSpeaker, speakers } from "@/datasets/speakers";
import Link from "next/link";
import { useState, useEffect } from "react";

import Image from "next/image";
import Balancer from "react-wrap-balancer";
import KeynoteBox from "@/components/keynoteBox";
import { triggerWarnings } from "@/datasets/triggers";

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
              1 / 4 / 2025 | 10:00 AM — 4:00 PM
            </p>
            <div className="flex flex-col gap-2 items-end">
              <p className="m-0 text-md lg:text-xl">
                Ellison building B 003 + Sandyford building 405, Northumbria
                Uni.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="speakers"
        className="w-full min-h-screen py-[64px] px-10 2xl:px-32 bg-beige flex flex-col justify-center items-center"
      >
        <h2 className="text-center text-xl lg:text-3xl mb-14">
          Meet the speakers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-y-10 gap-x-5 md:gap-10 place-content-center">
          <KeynoteBox speaker={keynoteSpeaker} />
          {speakers.map((speaker) => (
            <SpeakerBox key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>
      <section
        id="panels"
        className="w-full min-h-screen py-[64px] lg:pt-[128px] bg-red flex flex-col justify-center items-center text-beige"
      >
        <h2 className="text-center text-xl lg:text-3xl mb-10 lg:mb-20">
          Timetable and panels
        </h2>
        <div className="w-3/4 lg:w-5/6 xl:w-1/2 mx-auto flex flex-col text-center lg:text-left">
          {panels.map((panel, i) => (
            <div
              key={panel.name}
              className="w-full flex flex-col lg:flex-row flex-nowrap gap-5 lg:gap-10 py-8"
              style={{ borderTop: i > 0 ? "1px solid var(--beige)" : "none" }}
            >
              <div className="w-full lg:w-1/2 flex flex-col gap-5 h-full justify-center lg:justify-start">
                {panel.timeStart || panel.place ? (
                  <div className="flex flex-col justify-center">
                    {panel.timeStart ? (
                      <p className="font-bold opacity-75">
                        {panel.timeStart +
                          (panel.timeEnd ? " — " + panel.timeEnd : "")}
                      </p>
                    ) : (
                      <></>
                    )}
                    {panel.place ? (
                      <Link href={panel.place.address} target="_blank">
                        <p className="text-sm italic transition-all hover:text-black">
                          {panel.place.name + " →"}
                        </p>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <></>
                )}
                <h3 className="text-md lg:text-2xl">{panel.name}</h3>
                {panel.desc ? (
                  <p className="text-xs lg:text-sm lg:text-md">
                    <Balancer>{panel.desc}</Balancer>
                  </p>
                ) : (
                  <></>
                )}
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-7">
                {panel.speakers.map((speaker) => (
                  <Link
                    key={speaker.speaker.id}
                    href={"/speaker/" + speaker.speaker.id}
                    className="transition-all duration-300 lg:hover:translate-x-2 hover:text-black"
                  >
                    <div className="flex flex-row flex-nowrap gap-2">
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-beige opacity-75">
                          {speaker.speaker.timeStart}
                        </p>
                        <h4 className="text-md speaker">
                          {(speaker.speaker.paper?.title ??
                            "[[Paper to be announced]]") +
                            (speaker.speaker.paper?.subtitle
                              ? ": " + speaker.speaker.paper?.subtitle
                              : "")}
                        </h4>
                        <p className="text-sm ml-0 lg:ml-5 opacity-75 text-beige">
                          {"// " + speaker.speaker.name}
                        </p>
                        <div className="grid grid-cols-2 gap-3 items-center lg:items-start">
                          {speaker.speaker.paper?.triggerWarnings?.map(
                            (warning) => (
                              <div
                                className="flex flex-row flex-nowrap gap-1 justify-start items-center mt-1 ml-0 lg:ml-5"
                                key={warning.id}
                              >
                                <Image
                                  key={warning.id}
                                  src={"/img/triggers/" + warning.id + ".svg"}
                                  alt={warning.text}
                                  title={warning.text}
                                  width={30}
                                  height={30}
                                />
                                <p className="text-xs text-beige opacity-75 ">
                                  {warning.text}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="contact"
        className="w-full min-h-screen py-[150px] bg-beige flex flex-col justify-center items-center gap-10 lg:gap-20"
      >
        <h2 className="text-center text-xl lg:text-3xl">Get in touch</h2>
        <div className="w-4/5 xl:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* <Link href={facebook} className="link" target="_blank">
            <p className="text-xl">Facebook &#x2192;</p>
          </Link> */}
          <Link href={instagram} className="link" target="_blank">
            <p className="text-xl">Instagram &#x2192;</p>
          </Link>
          <Link href={linkedin} className="link" target="_blank">
            <p className="text-xl">LinkedIn &#x2192;</p>
          </Link>{" "}
          <Link
            href={ticketsLink}
            target={"_blank"}
            className="button w-2/3 md:w-full lg:w-2/3 mx-auto"
          >
            <p className="navbar-link text-md xl:text-lg text-center">
              Book your seat &#x2192;
            </p>
          </Link>
        </div>

        <div>
          <h2 id="inclusivity" className="speaker text-xl text-center mb-2">
            Inclusivity Commitment
          </h2>
          <p className="text-xs lg:text-sm w-full px-10 lg:w-1/2 lg:mx-auto text-center mt-3">
            Inclusivity officer: Kai Davis
          </p>
          <p className="text-xs lg:text-sm w-full px-10 lg:w-1/2 lg:mx-auto text-center mt-3">
            <Balancer>
              Respect, kindness, equity. We are committed to making everyone
              feel welcome in the Perspectives, Patterns and Pathways
              conference. Embracing and engaging with unique voices are at the
              forefront of creating an inclusive academic environment. We have
              taken great care to consider how we encapsulate and present this
              conference as thoughtfully as possible and we encourage our
              delegates to do the same. There will be an inclusivity officer
              present. They will be happy to listen to any concerns delegates
              may raise.
            </Balancer>
          </p>
          <p className="text-xs lg:text-sm w-full px-10 lg:w-1/2 lg:mx-auto text-center mt-4 opacity-50">
            We employ a system of trigger warnings to allow for viewers
            sensitive to certain topics to decide whether the presentation is
            suitable for them.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-10 flex-wrap mt-4 opacity-50 lg:mx-20">
            {triggerWarnings.map((warning) => (
              <div
                className="flex flex-row flex-nowrap gap-1 justify-center items-center"
                key={warning.id}
              >
                <Image
                  key={warning.id}
                  src={"/img/triggers/" + warning.id + ".svg"}
                  alt={warning.text}
                  title={warning.text}
                  width={40}
                  height={40}
                />
                <p className="text-xs lg:text-sm">{warning.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 id="inclusivity" className="speaker text-xl text-center mb-2">
            Ethics Statement
          </h2>
          <p className="text-xs lg:text-sm w-full px-10 lg:w-1/2 lg:mx-auto text-center mt-3">
            Ethics officer: Chloe Gibson
          </p>
          <p className="text-xs lg:text-sm w-full px-10 lg:w-1/2 lg:mx-auto text-center mt-3">
            <Balancer>
              Perspectives, Patterns and Pathways is dedicated to ensuring that
              our research is done with fairness and respect. Each of the
              participants have conducted their research in a transparent and
              diligent manner to ensure that our work is as objective and
              accurate. We are committed to creating an environment where ethics
              and fairness are at the heart of what we do.
            </Balancer>
          </p>
        </div>

        <div>
          <h2 className="speaker text-xl text-center mb-3">Supported by</h2>

          <Link href={"https://www.northumbria.ac.uk/"} target="_blank">
            <Image
              src="/img/NU_logo.png"
              alt="Northumbria University Logo"
              width={200}
              height={200}
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
