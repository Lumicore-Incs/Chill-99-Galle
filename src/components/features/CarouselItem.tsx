import React, { useCallback, useEffect, useState } from "react";
import image1 from "../../assets/imagecaro-01.jpg";
import image2 from "../../assets/imagecaro-02.jpg";
import image3 from "../../assets/imagecaro-03.jpg";
import image4 from "../../assets/imagecaro-04.png";
import image5 from "../../assets/imagecaro-05.png";
import image6 from "../../assets/imagecaro-06.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
}

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sample images - replace with your actual images
  const carouselItems: CarouselItem[] = [
    { id: 1, image: image1, title: "Burgers" },
    { id: 2, image: image2, title: "Fresh Salads" },
    { id: 3, image: image3, title: "Cappuccino" },
    { id: 4, image: image4, title: "Grilled Kebabs" },
    { id: 5, image: image5, title: "Cocktails" },
    { id: 6, image: image6, title: "Waffles" },
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  }, [carouselItems.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  }, [carouselItems.length, isTransitioning]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Helper function to get margin class
  const getMarginClass = (index: number) => {
    return index % 2 === 0 ? "mt-12" : "mb-12";
  };

  // Helper function to get transform class based on position
  const getTransformClass = (position: number, size: "mobile" | "tablet" | "desktop") => {
    const scaleValues = {
      mobile: { center: 1, side: 0.8 },
      tablet: { center: 1, side: 0.85 },
      desktop: { center: 1, side: 0.9 }
    };
    
    const translateValues = {
      mobile: { center: 0, side: 0 },
      tablet: { center: 0, side: 30 },
      desktop: { center: 0, side: 40 }
    };
    
    const zIndexValues = {
      mobile: { center: 30, side: 10 },
      tablet: { center: 30, side: 10 },
      desktop: { center: 30, side: 10 }
    };
    
    if (position === 0) {
      return `scale-${scaleValues[size].center} translate-x-0 z-${zIndexValues[size].center} opacity-100`;
    } else {
      const direction = position > 0 ? 1 : -1;
      return `scale-${scaleValues[size].side} translate-x-${direction * translateValues[size].side} z-${zIndexValues[size].side} opacity-70`;
    }
  };

  // Helper function to render image item
  const renderImageItem = (
    item: CarouselItem,
    itemIndex: number,
    position: number,
    key: string,
    size: "mobile" | "tablet" | "desktop"
  ) => {
    const sizeClasses = {
      mobile: "w-64 h-80",
      tablet: "w-48 h-64",
      desktop: "w-60 h-80",
    };

    return (
      <div
        key={key}
        className={`
          relative cursor-pointer transition-all duration-500 ease-in-out transform
          ${sizeClasses[size]} ${getMarginClass(itemIndex)} ${getTransformClass(position, size)}
        `}
        onMouseEnter={() => setHoveredIndex(itemIndex)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => {
          if (position !== 0 && !isTransitioning) {
            const steps = position > 0 ? position : Math.abs(position);
            setIsTransitioning(true);
            
            // Animate through intermediate steps for smoother transition
            let step = 0;
            const animateStep = () => {
              if (step < steps) {
                setCurrentIndex(prev => (prev + (position > 0 ? 1 : -1) + carouselItems.length) % carouselItems.length);
                step++;
                setTimeout(animateStep, 500 / steps);
              } else {
                setIsTransitioning(false);
              }
            };
            animateStep();
          }
        }}
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {(hoveredIndex === itemIndex || position === 0) && (
            <div className="absolute inset-0 bg-black/40 transition-all duration-300">
              <div className="absolute inset-4 border-2 border-[var(--green-primary)] rounded-lg"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3
                  className={`text-[var(--green-primary)] font-bold text-center ${
                    size === "desktop" ? "text-3xl" : "text-xl"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full relative overflow-hidden flex items-center justify-center py-8">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={32} />
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight size={32} />
        </button>

        <div className="flex items-center justify-center">
          {/* Mobile: Show only current image */}
          <div className="block md:hidden">
            {renderImageItem(
              carouselItems[currentIndex],
              currentIndex,
              0,
              `mobile-${currentIndex}`,
              "mobile"
            )}
          </div>

          {/* Tablet: Show 3 images */}
          <div className="hidden md:flex lg:hidden items-center justify-center space-x-4">
            {[-1, 0, 1].map((offset, i) => {
              const index = (currentIndex + offset + carouselItems.length) % carouselItems.length;
              return renderImageItem(
                carouselItems[index], 
                index, 
                offset, 
                `tablet-${index}-${i}`, 
                "tablet"
              );
            })}
          </div>

          {/* Desktop: Show 5 images */}
          <div className="hidden lg:flex items-center justify-center space-x-4">
            {[-2, -1, 0, 1, 2].map((offset, i) => {
              const index = (currentIndex + offset + carouselItems.length) % carouselItems.length;
              return renderImageItem(
                carouselItems[index],
                index,
                offset,
                `desktop-${index}-${i}`,
                "desktop"
              );
            })}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning && index !== currentIndex) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-[var(--green-primary)] scale-125" 
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;