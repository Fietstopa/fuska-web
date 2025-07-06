import React, { useEffect, useState } from "react";

interface IphoneCarouselProps {
  screenshots: string[];
}

const IphoneCarousel: React.FC<IphoneCarouselProps> = ({ screenshots }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screenshots]);

  return (
    <div
      className="w-full flex justify-center"
      style={{ transform: "rotate(-14deg) scale(2.2)" }}
    >
      <div className="inline-grid grid-cols-4 gap-4">
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
              {/* Screenshot jako "displej" */}
              <img
                src={screenshots[index]}
                alt={`screenshot-${index}`}
                className="absolute object-cover rounded-[30px] z-10"
              />
              {/* PNG mockup iPhonu */}
              <img
                src="/iphonemock.png"
                alt="iPhone mockup"
                className="absolute top-0 left-0 w-full h-full object-contain z-20"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IphoneCarousel;
