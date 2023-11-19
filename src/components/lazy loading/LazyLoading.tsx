import React, { useRef, useEffect, useState } from "react";

interface LazyLoadingImageProps {
  src: string;
  alt: string;
  classN: string;
}

const LazyLoadingImage: React.FC<LazyLoadingImageProps> = ({
  src,
  alt,
  classN,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  let observer: IntersectionObserver;

  useEffect(() => {
    observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust as needed
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs once

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing once the image is visible
      }
    });
  };

  return (
    <img ref={imgRef} src={isVisible ? src : ""} alt={alt} className={classN} />
  );
};

export default LazyLoadingImage;
