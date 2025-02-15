function getScaleFromIteration(initial: number, iteration: number) {
  let scale = initial;
  for (let i = 1; i < iteration; i++) {
    scale = scale * Math.sin(0.785398163);
  }
  return scale;
}

function getRotationFromIteration(initial: number, iteration: number) {
  return initial + (iteration - 1) * 20;
}

interface patternBlockProps {
  color: string;
  scale: string;
  rotation: string;
}

const PatternBlock: React.FC<patternBlockProps> = ({
  color,
  scale,
  rotation,
}) => {
  return (
    <div
      className="w-80 aspect-square absolute"
      style={{
        backgroundColor: "var(--" + color + ")",
        top: "50%",
        left: "50%",
        transform:
          "translate(-50%, -50%) scale(" +
          scale +
          "%) rotate(" +
          rotation +
          "deg)",
      }}
    >
      <div className="bg-beige h-full w-full aspect-square rounded-full"></div>
    </div>
  );
};

export default function Home() {
  const inScale = 300;
  const inRot = -240;

  return (
    <main className="w-screen overflow-x-hidden">
      <section className="w-full h-screen bg-beige grid place-items-center">
        <div className="w-3/4 h-3/4 overflow-hidden bg-grass relative">
          <PatternBlock
            color="yellow"
            scale={getScaleFromIteration(inScale, 1).toString()}
            rotation={getRotationFromIteration(inRot, 1).toString()}
          />
          <PatternBlock
            color="orange"
            scale={getScaleFromIteration(inScale, 2).toString()}
            rotation={getRotationFromIteration(inRot, 2).toString()}
          />
          <PatternBlock
            color="red"
            scale={getScaleFromIteration(inScale, 3).toString()}
            rotation={getRotationFromIteration(inRot, 3).toString()}
          />
          <PatternBlock
            color="grass"
            scale={getScaleFromIteration(inScale, 4).toString()}
            rotation={getRotationFromIteration(inRot, 4).toString()}
          />
          <PatternBlock
            color="blue"
            scale={getScaleFromIteration(inScale, 5).toString()}
            rotation={getRotationFromIteration(inRot, 5).toString()}
          />
          <PatternBlock
            color="black"
            scale={getScaleFromIteration(inScale, 6).toString()}
            rotation={getRotationFromIteration(inRot, 6).toString()}
          />
        </div>
      </section>
    </main>
  );
}
