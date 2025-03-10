import { speakers } from "@/datasets/speakers";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function SpeakerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const name = (await params).id;

  const speaker = speakers.find((x) => x.id === name);

  return (
    <section className="w-full flex flex-col justify-center align-middle gap-5 md:gap-10 lg:pb-52 mt-6 md:mt-0 md:pt-14 bg-beige">
      <Link href="/" className="link mb-10">
        <p>&#x2190; Go back</p>
      </Link>
      <div
        className="w-60 mx-auto aspect-square"
        style={{ backgroundColor: "var(--" + speaker?.color + ")" }}
      >
        <div className="w-full h-full aspect-square bg-beige rounded-full relative overflow-hidden">
          <div
            className="aspect-square bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "10.6066rem",
              transform: "translate(-50%, -50%) rotate(20deg)",
            }}
          >
            <div className="w-full h-full aspect-square bg-beige rounded-full relative overflow-hidden">
              <Image
                src={"/img/speakers/" + speaker?.id + ".webp"}
                alt={speaker?.name ?? ""}
                width={500}
                height={500}
                className="object-cover mix-blend-luminosity hover:mix-blend-normal"
                style={{ transform: "rotate(-20deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center mt-10 md:mt-0 mb-2 md:mb-5">
          {speaker?.role}
        </p>
        <h1 className="text-3xl lg:text-[2em] xl:text-[2.75rem] mb-5 leading-10 xl:leading-[4rem] text-center">
          {speaker?.name}
        </h1>
      </div>
      <div className="text-center px-10 w-full md:w-3/4 lg:w-1/2 mx-auto">
        <p className="mb-10">{speaker?.name.split(" ")[0] + "'s paper"}</p>
        <h2 className="bahnschrift text-center text-3xl">
          {speaker?.paper
            ? speaker.paper.title + (speaker.paper.subtitle ? ":" : "")
            : ""}
        </h2>
        <p className="text-xl mb-5">{speaker?.paper?.subtitle}</p>
        <p className="w-full text-sm font-sans leading-relaxed mb-5 text-justify">
          <Balancer>{speaker?.paper?.abstract}</Balancer>
        </p>
        {speaker?.paper?.keywords ? (
          <p className="mb-7">
            <strong>Keywords: </strong>
            {speaker?.paper?.keywords?.map((keyword, index) => (
              <span key={keyword}>{(index !== 0 ? ", " : "") + keyword}</span>
            ))}
          </p>
        ) : (
          <></>
        )}
        {speaker?.paper?.image ? (
          <>
            <div className="w-full h-80 relative">
              <Image
                src={"/img/papers/" + speaker?.id + ".jpg"}
                alt={speaker?.name ?? ""}
                fill
                className="object-cover mix-blend-luminosity"
              />
            </div>
            <p className="text-xs text-left mt-3 opacity-50">
              {speaker.paper.image.citation}
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
      <Link href="/" className="link mt-10">
        <p>&#x2190; Go back</p>
      </Link>
    </section>
  );
}
