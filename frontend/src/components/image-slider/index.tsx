import { useCallback, useEffect, useState } from "react";

import "./index.css";

interface IImageSliderProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showFooterNavigation?: boolean;
}
export const ImageSlider = ({
  images,
  autoPlay = false,
  autoPlayInterval = 3000,
  showArrows = true,
  showFooterNavigation = true,
}: IImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = useCallback(() => {
    const nextImageIndex = currentImageIndex + 1;
    if (nextImageIndex < images.length) {
      setCurrentImageIndex(nextImageIndex);
    } else {
      setCurrentImageIndex(0);
    }
  }, [currentImageIndex, images.length]);

  const handlePreviousImage = () => {
    const previousImageIndex = currentImageIndex - 1;
    if (previousImageIndex >= 0) {
      setCurrentImageIndex(previousImageIndex);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        handleNextImage();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, currentImageIndex, handleNextImage]);

  return (
    <div className="slider-container">
      <div className="slider-image-container">
        <img src={images[currentImageIndex]} alt="slider" />
        {showArrows && (
          <div className="slider-arrow-container">
            <button className="slider-button" onClick={handlePreviousImage}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slider-button" onClick={handleNextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
      {showFooterNavigation && (
        <div className="slider-footer">
          {images.map((image, index) => (
            <button
              key={index}
              className={`slider-button ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};
