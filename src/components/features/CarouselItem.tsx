import { useState } from 'react';
import image1 from "../../assets/gallery/GalleryImage1.jpg";
import image2 from "../../assets/gallery/GalleryImage2.jpg";
import image3 from "../../assets/gallery/GalleryImage4.jpg";
import image4 from "../../assets/gallery/GalleryImage6.jpg";
import image5 from "../../assets/gallery/GalleryImage5.jpg";
import image6 from "../../assets/imagecaro-01.jpg";
import image7 from "../../assets/imagecaro-02.jpg";
import image8 from "../../assets/imagecaro-03.jpg";
import image9 from "../../assets/imagecaro-04.png";
import image10 from "../../assets/imagecaro-05.png";

interface ImageType {
  id: number;
  src: string;
  title?: string;
}

interface ImageCardProps {
  image: ImageType;
  delay?: number;
}

const HorizontalScrollingGallery = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Sample images - you can replace these with your actual images
  const images: ImageType[] = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
    { id: 10, src: image10 }
  ];

  // Split images into two rows
  const row1Images = [...images.slice(0, 5), ...images.slice(0, 5)]; // Duplicate for seamless loop
  const row2Images = [...images.slice(5), ...images.slice(5)]; // Duplicate for seamless loop

  const ImageCard = ({ image, delay = 0 }: ImageCardProps) => (
    <div 
      className="flex-shrink-0 w-80 h-50 mx-4 relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br">
        <img
          src={image.src}
          alt={image.title || ''}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
      
        </div>
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
        <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40 transition-colors duration-500" />
      </div>
    </div>
  );

  return (
    <div className="w-full md:min-h-screen md:mt-44 mt-8 relative overflow-hidden">
      <div className="relative z-10 py-12">
        {/* First Row - Scrolling Right */}
        <div 
          className="relative mb-8 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex ${isPaused ? '' : 'animate-scroll-right'}`}
            style={{
              width: 'fit-content',
              animation: isPaused ? 'none' : 'scroll-right 30s linear infinite'
            }}
          >
            {row1Images.map((image, index) => (
              <ImageCard key={`row1-${image.id}-${index}`} image={image} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Left */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex ${isPaused ? '' : 'animate-scroll-left'}`}
            style={{
              width: 'fit-content',
              animation: isPaused ? 'none' : 'scroll-left 25s linear infinite'
            }}
          >
            {row2Images.map((image, index) => (
              <ImageCard key={`row2-${image.id}-${index}`} image={image} delay={index * 150} />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        /* Smooth scrolling performance */
        .animate-scroll-right,
        .animate-scroll-left {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollingGallery;