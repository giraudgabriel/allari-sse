import { useCallback, useEffect, useState } from "react";
import {
  ArrowsContainer,
  SliderButton,
  SliderContainer,
  SliderFooter,
  SliderImageContainer,
} from "./styles";

interface IImageSliderProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showFooterNavigation?: boolean;
  loading?: boolean;
}
export const ImageSlider = ({
  images,
  autoPlay = false,
  autoPlayInterval = 3000,
  showArrows = true,
  showFooterNavigation = true,
  loading = false,
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

  const selectedImage = images.length > 0 ? images[currentImageIndex] : "";

  return (
    <SliderContainer>
      <SliderImageContainer>
        {loading && <p>Loading...</p>}
        {!loading && <img src={selectedImage} alt="slider" />}
        {showArrows && (
          <ArrowsContainer>
            <SliderButton onClick={handlePreviousImage}>
              <i className="fas fa-chevron-left"></i>
            </SliderButton>
            <SliderButton onClick={handleNextImage}>
              <i className="fas fa-chevron-right"></i>
            </SliderButton>
          </ArrowsContainer>
        )}
      </SliderImageContainer>
      {showFooterNavigation && (
        <SliderFooter>
          {images.map((image, index) => (
            <SliderButton
              key={index}
              active={image === selectedImage}
              onClick={() => setCurrentImageIndex(index)}
            ></SliderButton>
          ))}
        </SliderFooter>
      )}
    </SliderContainer>
  );
};
