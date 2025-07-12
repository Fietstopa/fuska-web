import React, { useEffect, useState } from "react";

interface IphoneCarouselProps {
  screenshots: string[];
}

const IphoneCarousel: React.FC<IphoneCarouselProps> = ({ screenshots }) => {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState(2.2);

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
      className="w-full flex justify-center"
      style={{ transform: `rotate(-14deg) scale(${scale})` }}
    >
      <div className="inline-grid grid-cols-4 gap-x-65 gap-y-20 md:gap-8">
        {Array.from({ length: 8 }).map((_, i) => {
          const index = (current + i) % screenshots.length;

          return (
            <div
              key={i}
              className="relative w-[250px] h-[500px]"
              style={{
                transform: `translateY(${i % 2 === 1 ? "-80px" : "0px"})`,
              }}
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
      </div>
    </div>
  );
};

export default IphoneCarousel;
