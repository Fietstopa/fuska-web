import React from "react";

interface IconLoaderProps {
  src: string;
  className?: string;
  alt?: string;
}

const IconLoader: React.FC<IconLoaderProps> = ({
  src,
  className = "w-10 h-10",
  alt = "icon",
}) => {
  return <img src={src} alt={alt} className={className} />;
};

export default IconLoader;
