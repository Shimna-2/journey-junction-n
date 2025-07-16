import React, { useState, useEffect } from "react";

const images = [
  "/src/assets/images/imgslide6.jpeg",
  "/src/assets/images/imgslide9.jpg",
  "/src/assets/images/imgslide8.jpg",
  "/src/assets/images/imgslide5.jpeg",
  "/src/assets/images/imgslide4.jpeg",
  "/src/assets/images/imgslide3.jpeg",
];

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
    let currentImages = [];
    for (let i = 0; i < imagesPerSlide; i++) {
      currentImages.push(images[(currentIndex + i) % images.length]);
    }
    return currentImages;
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
