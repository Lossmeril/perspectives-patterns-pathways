import { speakers } from "@/datasets/speakers";

export default async function SpeakerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const name = (await params).id;

  const speaker = speakers.find((x) => x.id === name);

  return (
    <section className="w-full h-screen flex flex-col justify-center align-middle gap-5 md:gap-10 lg:pb-52 -mt-24 md:mt-0 md:pt-14 bg-beige ">
      <h1 className="text-3xl lg:text-[2em] xl:text-[2.75rem] mb-5 leading-10 xl:leading-[4rem] text-center">
        {speaker?.name}
      </h1>
    </section>
  );
}
