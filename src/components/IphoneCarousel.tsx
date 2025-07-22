import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface IphoneCarouselProps {
  screenshots: string[];
}

const IphoneCarousel: React.FC<IphoneCarouselProps> = ({ screenshots }) => {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState(2.2);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Posun o 0 až 50px podle scrollu
  const topRowX = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const bottomRowX = useTransform(scrollYProgress, [0, 1], [0, -400]);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 920 ? 0.8 : 2.2);
    };

    handleResize(); // Init
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screenshots]);

  // Prevent default drag behavior
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  return (
    <div
      ref={ref}
      className="w-full flex justify-center"
      style={{ transform: `rotate(-14deg) scale(${scale})` }}
    >
      <div className="flex flex-col gap-40">
        {/* HORNÍ ŘADA */}
        {/** HORNÍ ŘADA */}
        <motion.div
          className="grid grid-cols-8 gap-x-20 gap-y-20 md:gap-64 "
          style={{ x: topRowX }}
        >
          {Array.from({ length: 8 }).map((_, i) => {
            const index = (current + (i % 4)) % screenshots.length;
            return (
              <div key={`top-${i}`} className="relative w-[250px] h-[500px]">
                <img
                  src={screenshots[index]}
                  alt={`screenshot-${index}`}
                  className="absolute object-cover rounded-[30px] z-10"
                  draggable="false"
                  onDragStart={handleDragStart}
                  style={{ pointerEvents: "none" }}
                />
                <img
                  src="/iphonemock.png"
                  alt="iPhone mockup"
                  className="absolute top-0 left-0 w-full h-full object-contain z-20"
                  draggable="false"
                  onDragStart={handleDragStart}
                  style={{ pointerEvents: "none" }}
                />
              </div>
            );
          })}
        </motion.div>

        {/** DOLNÍ ŘADA */}
        <motion.div
          className="grid grid-cols-8 gap-x-20 gap-y-20 md:gap-64"
          style={{ x: bottomRowX }}
        >
          {Array.from({ length: 8 }).map((_, i) => {
            const index = (current + 4 + (i % 4)) % screenshots.length;
            return (
              <div
                key={`bottom-${i}`}
                className="relative w-[250px] h-[500px] translate-y-[-80px]"
              >
                <img
                  src={screenshots[index]}
                  alt={`screenshot-${index}`}
                  className="absolute object-cover rounded-[30px] z-10"
                  draggable="false"
                  onDragStart={handleDragStart}
                  style={{ pointerEvents: "none" }}
                />
                <img
                  src="/iphonemock.png"
                  alt="iPhone mockup"
                  className="absolute top-0 left-0 w-full h-full object-contain z-20"
                  draggable="false"
                  onDragStart={handleDragStart}
                  style={{ pointerEvents: "none" }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default IphoneCarousel;
