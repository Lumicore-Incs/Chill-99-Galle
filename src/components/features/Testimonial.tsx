import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-[var(--green-primary)]" : "text-[#1F0D09]"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="w-full">
      {/* Mobile: Carousel view */}
      <div className="block lg:hidden">
        <div className="relative">
          <div className="bg-[#1F0D09] backdrop-blur-sm rounded-lg px-6 py-10 mx-4">
            <div className="flex justify-center mb-6">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div className="flex justify-center mb-4">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
            <p className="text-white text-sm leading-relaxed mb-4 text-center">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="text-center">
              <p className="text-[#E5B024] font-semibold">
                {testimonials[currentIndex].name}
              </p>
            </div>
          </div>
          
          {/* Navigation for mobile */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
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

      {/* Desktop: Grid view */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1F0D09] backdrop-blur-sm rounded-lg px-6 py-10 transform transition-all duration-300 hover:scale-105 shadow-lg relative"
            >
              <div className="flex justify-center mb-6">
                <div className="absolute -top-5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-white text-sm leading-relaxed mb-4 text-center">
                "{testimonial.text}"
              </p>
              <div className="text-center">
                <p className="text-[#E5B024] font-semibold">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
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
