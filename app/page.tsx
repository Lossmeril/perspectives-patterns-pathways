import HeroBanner from "@/components/heroBanner";
import Navbar from "@/components/navbar";
import SpeakerBox from "@/components/speakerBox";
import { speakers } from "@/datasets/speakers";

const HomePage = () => {
  const inScale = 900;
  const inRot = -240;

  return (
    <main className="max-w-screen overflow-x-hidden">
      <section className="w-full h-screen bg-beige px-20 pb-32 pt-10 flex flex-col justify-center align-middle gap-10">
        <Navbar />
        <HeroBanner initialRotation={inRot} initialScale={inScale} />
        <div className="p-5 w-full text-center">
          <h1 className="text-[2.75rem] mb-5">
            Perspectives, patterns and pathways
          </h1>
          <div className="w-3/4 mx-auto flex flex-row justify-between">
            <p className="m-0 text-xl">MRes academic conference</p>
            <p className="m-0 text-xl">1 / 4 / 2025 | 11:30 AM — 4:00 PM</p>
            <p className="m-0 text-xl">
              Sandyford building 405, Northumbria University
            </p>
          </div>
        </div>
      </section>
      <section
        id="speakers"
        className="w-full min-h-screen py-[64px] bg-beige grid place-items-center"
      >
        <h2 className="text-3xl mb-20">Meet the speakers</h2>
        <div className="grid grid-cols-4 gap-10">
          {speakers.map((speaker) => (
            <SpeakerBox key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
