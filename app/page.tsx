import HeroBanner from "@/components/heroBanner";

export default function Home() {
  const inScale = 1100;
  const inRot = -240;

  return (
    <main className="w-screen overflow-x-hidden">
      <section className="w-full h-screen bg-beige grid place-items-center">
        <HeroBanner initialRotation={inRot} initialScale={inScale} />
      </section>
    </main>
  );
}
