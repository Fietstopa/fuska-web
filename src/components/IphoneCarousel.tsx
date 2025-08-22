import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IphoneCarouselProps {
  screenshots: string[];
}

const IphoneCarousel: React.FC<IphoneCarouselProps> = ({ screenshots }) => {
  const [scale, setScale] = useState(2.2);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 920 ? 0.8 : 2.2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  const duration = 100;
  const itemWidth = 250 + 80;

  const renderRow = (reverse = false) => {
    const rowScreens = [
      ...screenshots,
      ...screenshots,
      ...screenshots,
      ...screenshots,
    ];

    return (
      <motion.div
        className="flex"
        animate={{
          x: reverse
            ? [-itemWidth * screenshots.length, 0]
            : [0, -itemWidth * screenshots.length],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {rowScreens.map((src, i) => (
          <div
            key={i}
            className={`relative w-[250px] h-[500px] mr-10 ${
              reverse ? "translate-y-[-80px]" : ""
            }`}
          >
            <img
              src={src}
              alt={`screenshot-${i}`}
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
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className="w-full flex justify-center overflow-hidden"
      style={{ transform: `rotate(-14deg) scale(${scale})` }}
    >
      <div className="flex flex-col gap-30">
        {/* Horní řada */}
        {renderRow(false)}
        {/* Dolní řada */}
        {renderRow(true)}
      </div>
    </div>
  );
};

export default IphoneCarousel;
