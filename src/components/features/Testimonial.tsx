import { useState, useEffect, useRef } from "react";
import av1 from "../../assets/av1.png";
import av2 from "../../assets/av2.png";
import av3 from "../../assets/av3.png";
import av4 from "../../assets/av4.png";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nimasha R",
    rating: 5,
    text: "Chill 99 is such a hidden gem in Galle Fort. The pastries were incredibly fresh, and the overall atmosphere was so peaceful. I could sit here for hours!",
    avatar: av1,
  },
  {
    id: 2,
    name: "Tharindu S",
    rating: 5,
    text: "I absolutely loved the bubble tea here! So many flavors to choose from, and each one is full of taste. It's my go-to stop whenever I visit the Fort.",
    avatar: av2,
  },
  {
    id: 3,
    name: "Dilani M",
    rating: 5,
    text: "The coffee was rich and perfectly brewed, and the staff were warm and welcoming. The interior is cozy and well-designed — it really feels like home.",
    avatar: av3,
  },
  {
    id: 4,
    name: "Kasun P",
    rating: 4,
    text: "Everything about this café is amazing — from the relaxing ambiance to the delicious food and drinks. It's the perfect spot to chill with friends or unwind alone.",
    avatar: av4,
  },
  {
    id: 5,
    name: "Sachini W",
    rating: 5,
    text: "The matcha latte here is the best I've had in Sri Lanka! Perfectly balanced and not too sweet. Will definitely be coming back for more.",
    avatar: av1,
  },
  {
    id: 6,
    name: "Ravindu T",
    rating: 5,
    text: "Great place to work remotely with reliable WiFi and plenty of power outlets. The drinks are fantastic and the staff is very accommodating.",
    avatar: av4,
  },
  {
    id: 7,
    name: "Amaya K",
    rating: 4,
    text: "Loved the vintage decor and comfortable seating. The cakes are delicious and beautifully presented. A perfect Instagram spot too!",
    avatar: av2,
  },
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay) {
      interval = setInterval(() => {
        handleNext();
      }, 4000); // Change slide every 4 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? "text-[var(--green-primary)]" : "text-[#1F0D09]"}`}
      >
        ★
      </span>
    ));
  };

  // Calculate which testimonials to show on desktop (current index + next 3)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="w-full" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
      {/* Mobile: Carousel view */}
      <div className="block lg:hidden">
        <div className="relative">
          <div className="bg-[#1F0D09] backdrop-blur-sm rounded-lg px-6 py-10 mx-4 transition-all duration-500 ease-in-out transform">
            <div className="flex justify-center mb-6">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="flex justify-center mb-4">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
            <p className="text-white text-sm leading-relaxed mb-4 text-center transition-all duration-500 ease-in-out">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="text-center">
              <p className="text-[#E5B024] font-semibold transition-all duration-500 ease-in-out">
                {testimonials[currentIndex].name}
              </p>
            </div>
          </div>
          
          {/* Navigation arrows for mobile */}
          <button 
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 rounded-full p-2 text-white hover:bg-[var(--green-primary)] transition-all duration-300"
          >
            ‹
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 rounded-full p-2 text-white hover:bg-[var(--green-primary)] transition-all duration-300"
          >
            ›
          </button>
          
          {/* Dots indicator for mobile */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[var(--green-primary)] scale-125"
                    : "bg-yellow-600/50 hover:bg-[var(--green-primary)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Animated carousel view showing 4 testimonials */}
      <div className="hidden lg:block">
        <div className="relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex transition-all duration-500 ease-in-out gap-6 mb-8"
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[calc(25%-18px)] bg-[#1F0D09] backdrop-blur-sm rounded-lg px-6 py-10 transform transition-all duration-500 hover:scale-105 shadow-lg relative"
                style={{ 
                  opacity: index === 0 ? 1 : 0.9,
                  transform: `translateX(${index * 0}%) scale(${index === 0 ? 1 : 0.95})` 
                }}
              >
                <div className="flex justify-center mb-6">
                  <div className="absolute -top-5">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="flex justify-center mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-white text-sm leading-relaxed mb-4 text-center">
                  "{testimonial.text}"
                </p>
                <div className="text-center">
                  <p className="text-[#E5B024] font-semibold">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrows for desktop */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/70 rounded-full p-3 text-white hover:bg-[var(--green-primary)] transition-all duration-300"
          >
            ‹
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/70 rounded-full p-3 text-white hover:bg-[var(--green-primary)] transition-all duration-300"
          >
            ›
          </button>
        </div>
        
        {/* Dots indicator for desktop */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[var(--green-primary)] scale-125"
                  : "bg-yellow-600/50 hover:bg-[var(--green-primary)]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};