import React, { useState, useEffect } from "react";

import img1 from "../assets/images/imgslide6.jpeg";
import img2 from "../assets/images/imgslide9.jpg";
import img3 from "../assets/images/imgslide8.jpg";
import img4 from "../assets/images/imgslide5.jpeg";
import img5 from "../assets/images/imgslide4.jpeg";
import img6 from "../assets/images/imgslide3.jpeg";

const images = [img1, img2, img3, img4, img5, img6];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + imagesPerSlide) % images.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentImages = () => {
    return Array.from(
      { length: imagesPerSlide },
      (_, i) => images[(currentIndex + i) % images.length]
    );
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-opacity duration-700 ease-in-out">
        {getCurrentImages().map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Slide ${index}`}
            className="h-64 w-full object-cover rounded-2xl shadow-lg transition duration-700"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
