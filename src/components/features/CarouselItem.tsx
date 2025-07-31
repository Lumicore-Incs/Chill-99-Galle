import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleItems = () => {
    const items = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentIndex + i + carouselItems.length) % carouselItems.length;
      items.push({
        ...carouselItems[index],
        position: i,
        actualIndex: index,
      });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="w-full relative overflow-hidden flex items-center justify-center">
      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-4">
          {/* Navigation Button - Left */}
          <button
            onClick={prevSlide}
            className="z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 text-white hover:text-amber-100"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Images Container */}
          <div className="flex items-center justify-center space-x-6 relative">
            {visibleItems.map((item, index) => {
              const { position, actualIndex } = item;
              const isCenter = position === 0;
              const isAdjacent = Math.abs(position) === 1;
              const isEdge = Math.abs(position) === 2;

              // Animation classes
              let animationClass = "transition-all duration-700 ease-in-out";
              if (position < 0)
                animationClass += " opacity-100 translate-x-[-40px]";
              if (position > 0)
                animationClass += " opacity-100 translate-x-[40px]";
              if (isCenter) animationClass += " opacity-100 scale-100";
              if (isEdge) animationClass += " opacity-60 scale-95";

              return (
                <div
                  key={`${item.id}-${currentIndex}-${index}`}
                  className={`
          relative cursor-pointer
          w-[321px] h-[394px]
          ${isCenter ? "z-10 mb-20" : ""}
          ${isAdjacent ? "z-5 mt-20" : ""}
          ${isEdge ? "z-0 mb-20" : ""}
          ${animationClass}
        `}
                  onMouseEnter={() => setHoveredIndex(actualIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setCurrentIndex(actualIndex)}
                >
                  {/* Image */}
                  <div className="relative w-full h-full rounded-[5px] overflow-hidden shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    {/* Gradient overlay for edge items */}
                    {isEdge && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to right, #2D1B17B2, #2D1B17B2)",
                        }}
                      ></div>
                    )}

                    {/* Hover Effect - Yellow Frame and Title */}
                    {(isEdge || isCenter || isAdjacent) &&
                      hoveredIndex === actualIndex && (
                        <div
                          className="
                      absolute inset-0 transition-all duration-300 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(to right, #2D1B17B2, #2D1B17B2)",
                          }}
                        >
                          {/* Yellow Border Frame */}
                          <div className="absolute inset-8 border-2 border-[var(--green-primary)] rounded-[5px] shadow-lg"></div>

                          {/* Title Background */}
                          <div className="absolute top-[40%] left-4 right-4 rounded-lg p-4">
                            <h3 className="text-[var(--green-primary)] text-3xl font-bold text-center">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      )}

                    {/* Active indicator for center item */}
                    {isCenter && (
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-yellow-400 rounded-full"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Button - Right */}
          <button
            onClick={nextSlide}
            className="z-20 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 text-white hover:text-amber-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
