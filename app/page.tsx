import HeroBanner from "@/components/heroBanner";

export default function Home() {
  const inScale = 900;
  const inRot = -240;

  return (
    <main className="max-w-screen overflow-x-hidden">
      <section className="w-full h-screen bg-beige p-20 flex flex-col justify-center align-middle gap-10">
        <HeroBanner initialRotation={inRot} initialScale={inScale} />
        <div className="p-5 w-full text-center">
          <h1 className="text-[2.5rem] mb-5">
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
      <section className="w-full h-screen bg-beige grid place-items-center"></section>
    </main>
  );
}
