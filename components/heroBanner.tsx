"use client";
import { useEffect, useState } from "react";

function getScaleFromIteration(initial: number, iteration: number) {
  let scale = initial;
  for (let i = 1; i < iteration; i++) {
    scale = scale * Math.sin(0.785398163);
  }
  return scale;
}

// function getRotationFromIteration(initial: number, iteration: number) {
//   return initial + (iteration - 1) * 20;
// }

interface patternBlockProps {
  color: string;
  scale: string;
  rotation: string;
  iteration: number;
  x: number;
  y: number;
  children: React.ReactNode;
}

const PatternBlock: React.FC<patternBlockProps> = ({
  color,
  scale,
  rotation,
  iteration,
  x,
  y,
  children,
}) => {
  return (
    <div
      className="absolute aspect-square top-1/2 left-1/2"
      style={{
        transform:
          "translate(-" +
          (47.5 + x / 20) +
          "%, -" +
          (47.5 + y / 20) +
          "%) rotate(" +
          rotation +
          "deg)",
        backgroundColor: "var(--" + color + ")",
        zIndex: iteration * 10 + 2,
        width: scale + "px",
      }}
    >
      <div
        className="relative bg-beige max-w-full aspect-square rounded-full overflow-hidden"
        style={{ zIndex: iteration * 10 + 3, width: scale + "px" }}
      >
        {children}
      </div>
    </div>
  );
};

interface HeroBannerProps {
  initialRotation: number;
  initialScale: number;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  initialRotation,
  initialScale,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [effectsState, setEffectsState] = useState(true);

  return (
    <>
      <div className="w-3/4 h-3/4 overflow-hidden bg-grass relative mx-auto">
        <PatternBlock
          color="yellow"
          scale={getScaleFromIteration(initialScale, 1).toString()}
          rotation={initialRotation.toString()}
          iteration={1}
          x={effectsState ? mousePos.x : 50}
          y={effectsState ? mousePos.y : 50}
        >
          <PatternBlock
            color="orange"
            scale={getScaleFromIteration(initialScale, 2).toString()}
            rotation={"20"}
            iteration={2}
            x={effectsState ? mousePos.x : 50}
            y={effectsState ? mousePos.y : 50}
          >
            <PatternBlock
              color="red"
              scale={getScaleFromIteration(initialScale, 3).toString()}
              rotation={"20"}
              iteration={3}
              x={effectsState ? mousePos.x : 50}
              y={effectsState ? mousePos.y : 50}
            >
              <PatternBlock
                color="grass"
                scale={getScaleFromIteration(initialScale, 4).toString()}
                rotation={"20"}
                iteration={4}
                x={effectsState ? mousePos.x : 50}
                y={effectsState ? mousePos.y : 50}
              >
                <PatternBlock
                  color="blue"
                  scale={getScaleFromIteration(initialScale, 5).toString()}
                  rotation={"20"}
                  iteration={5}
                  x={effectsState ? mousePos.x : 50}
                  y={effectsState ? mousePos.y : 50}
                >
                  <PatternBlock
                    color="black"
                    scale={getScaleFromIteration(initialScale, 6).toString()}
                    rotation={"20"}
                    iteration={6}
                    x={effectsState ? mousePos.x : 50}
                    y={effectsState ? mousePos.y : 50}
                  >
                    <></>
                  </PatternBlock>
                </PatternBlock>
              </PatternBlock>
            </PatternBlock>
          </PatternBlock>
        </PatternBlock>
      </div>
      <div className="fixed bottom-10 right-10 flex flex-row-reverse items-center gap-3">
        <div className="check">
          <input
            id="check"
            type="checkbox"
            checked={effectsState}
            onChange={() => setEffectsState((prev) => !prev)}
          />
          <label htmlFor="check"></label>
        </div>
        <p className="text-sm">Reduce motion</p>
      </div>
    </>
  );
};

export default HeroBanner;
