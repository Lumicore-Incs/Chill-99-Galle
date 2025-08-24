import React, { useCallback, useEffect, useState } from "react";
import image1 from "../../assets/imagecaro-01.jpg";
import image2 from "../../assets/imagecaro-02.jpg";
import image3 from "../../assets/imagecaro-03.jpg";
import image4 from "../../assets/imagecaro-04.png";
import image5 from "../../assets/imagecaro-05.png";
import image6 from "../../assets/imagecaro-06.jpg";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
}

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  }, [carouselItems.length]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Helper function to get margin class
  const getMarginClass = (index: number) => {
    return index % 2 === 0 ? "mt-12" : "mb-12";
  };

  // Helper function to render image item
  const renderImageItem = (
    item: CarouselItem,
    itemIndex: number,
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
          relative cursor-pointer transition-all duration-700 ease-in-out
          ${sizeClasses[size]} opacity-70 ${getMarginClass(itemIndex)}
        `}
        onMouseEnter={() => setHoveredIndex(itemIndex)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => setCurrentIndex(itemIndex)}
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {hoveredIndex === itemIndex && (
            <div className="absolute inset-0 bg-black/50 transition-all duration-300">
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
        <div className="flex items-center justify-center">
          {/* Mobile: Show only current image */}
          <div className="block md:hidden">
            {renderImageItem(
              carouselItems[currentIndex],
              currentIndex,
              `mobile-${currentIndex}`,
              "mobile"
            )}
          </div>

          {/* Tablet: Show 3 images */}
          <div className="hidden md:flex lg:hidden items-center justify-center space-x-4">
            {[-1, 0, 1].map((offset, i) => {
              const index = (currentIndex + offset + carouselItems.length) % carouselItems.length;
              return renderImageItem(carouselItems[index], index, `tablet-${index}-${i}`, "tablet");
            })}
          </div>

          {/* Desktop: Show 5 images */}
          <div className="hidden lg:flex items-center justify-center space-x-4">
            {[-2, -1, 0, 1, 2].map((offset, i) => {
              const index = (currentIndex + offset + carouselItems.length) % carouselItems.length;
              return renderImageItem(
                carouselItems[index],
                index,
                `desktop-${index}-${i}`,
                "desktop"
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
