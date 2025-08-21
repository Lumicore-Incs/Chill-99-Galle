import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface GalleryCarouselProps {
  images: { src: string; name: string }[];
}

export const GalleryCarousel = ({ images }: GalleryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);

  // Touch handling for swipe gestures
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle touch events for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsTouch(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setIsTouch(false);
  };

  // Auto-advance slides (optional)
  useEffect(() => {
    if (!isTouch) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isTouch, images.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Mobile Carousel View */}
      <div className="block md:hidden">
        <div className="relative overflow-hidden rounded-lg bg-[#31201B] shadow-lg">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img src={image.src} alt={image.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-[#FFD580] text-lg font-semibold text-center">{image.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        {/* Dots Indicator */}
        <div className="flex gap-3 justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#FFD580]" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Current Image Counter */}
        {/* <div className="text-center mt-4">
          <span className="text-[#FAF3E0] text-sm">
            {currentIndex + 1} of {images.length}
          </span>
        </div> */}
      </div>

      {/* Desktop Grid View (Tablet and above) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-[#31201B] rounded-lg overflow-hidden shadow-lg relative group cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-64 object-cover transition-transform duration-300"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
              <span className="px-6 py-2 rounded text-[#FFD580] text-lg font-semibold shadow-lg mb-4">
                {image.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
