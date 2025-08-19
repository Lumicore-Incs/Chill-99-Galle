import React, { useEffect, useState } from "react";
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
    {
      id: 1,
      image: image1,
      title: "Burgers",
    },
    {
      id: 2,
      image: image2,
      title: "Fresh Salads",
    },
    {
      id: 3,
      image: image3,
      title: "Cappuccino",
    },
    {
      id: 4,
      image: image4,
      title: "Grilled Kebabs",
    },
    {
      id: 5,
      image: image5,
      title: "Cocktails",
    },
    {
      id: 6,
      image: image6,
      title: "Waffles",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative overflow-hidden flex items-center justify-center py-8">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 lg:space-x-4">
          {/* Navigation Button - Left */}
          {/* <button
            onClick={prevSlide}
            className="z-20 p-2 lg:p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 text-white hover:text-amber-100"
          >
            <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
          </button> */}

          {/* Images Container - Mobile shows 1, Tablet shows 3, Desktop shows 5 */}
          <div className="flex items-center justify-center space-x-2 lg:space-x-6 relative">
            {/* Mobile: Show only current image */}
            <div className="block md:hidden">
              <div
                className="relative cursor-pointer w-64 h-80"
                onClick={() => setHoveredIndex(hoveredIndex === currentIndex ? null : currentIndex)}
                onMouseEnter={() => setHoveredIndex(currentIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-full h-full rounded-[5px] overflow-hidden shadow-2xl">
                  <img
                    src={carouselItems[currentIndex].image}
                    alt={carouselItems[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  {hoveredIndex === currentIndex && (
                    <div className="absolute inset-0 bg-black/50 transition-all duration-300">
                      <div className="absolute inset-4 border-2 border-[var(--green-primary)] rounded-[5px]"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h3 className="text-[var(--green-primary)] text-3xl font-bold text-center">
                          {carouselItems[currentIndex].title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tablet and Desktop: Show multiple images */}
            <div className="hidden md:flex items-center justify-center space-x-4">
              {Array.from({ length: window.innerWidth >= 1024 ? 5 : 3 }, (_, i) => {
                const offset = window.innerWidth >= 1024 ? i - 2 : i - 1;
                const index = (currentIndex + offset + carouselItems.length) % carouselItems.length;
                const item = carouselItems[index];
                // Add alternating margin classes
                let marginClass = "";
                if (i === 0) marginClass = "mt-[3rem]";
                else if (i === 1) marginClass = "mb-[3rem]";
                else if (i === 2) marginClass = "mt-[3rem]";
                else if (i === 3) marginClass = "mb-[3rem]";
                else if (i === 4) marginClass = "mt-[3rem]";
                return (
                  <div
                    key={`${item.id}-${currentIndex}-${i}`}
                    className={`
                      relative cursor-pointer transition-all duration-700 ease-in-out
                      ${"w-48 h-64 lg:w-60 lg:h-80 z-5 opacity-70 gap-3"}
                      ${marginClass}
                    `}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className="relative w-full h-full rounded-[5px] overflow-hidden shadow-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 bg-black/50 transition-all duration-300">
                          <div className="absolute inset-4 border-2 border-[var(--green-primary)] rounded-[5px]"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <h3 className="text-[var(--green-primary)] text-xl lg:text-3xl font-bold text-center">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Button - Right */}
          {/* <button
            onClick={nextSlide}
            className="z-20 p-2 lg:p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 text-white hover:text-amber-100"
          >
            <ChevronRight size={20} className="lg:w-6 lg:h-6" />
          </button> */}
        </div>

        {/* Dots indicator for mobile */}
        {/* <div className="flex md:hidden justify-center space-x-2 mt-6">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[var(--green-primary)] scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ImageCarousel;
