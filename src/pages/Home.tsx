import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import aboutbg from "../assets/about-bg.png";
import cofee from "../assets/booking-01.jpg";
import mandala from "../assets/booking-02.jpg";
import thirdbanner from "../assets/booking-03.jpg";
import logo from "../assets/chill-99.png";
// banners are now loaded from src/constants/banners
import iconchoose02 from "../assets/iconchoose02.png";
import iconchoose05 from "../assets/iconchoose05.png";
import iconchoose06 from "../assets/iconchoose06.png";
import iconchoose01 from "../assets/iconschoose01.png";
import iconchoose03 from "../assets/iconschoose03.png";
import iconchoose04 from "../assets/iconschoose04.png";
import burger from "../assets/imagecaro-01.jpg";
import popularBg from "../assets/popular-bg.png";
import testimonial from "../assets/testimonialbg.png";
import whychhose from "../assets/whychoose.jpg";
import FAQ from "../components/common/FAQ";
import { FloatingContactIcons } from "../components/common/FloatingContactIcons";
import { Navbar } from "../components/common/Navbar";
import ReviewButtons from "../components/common/ReviewButtons";
import { TopLine } from "../components/common/TopLine";
import ImageCarousel from "../components/features/CarouselItem";
import { PopularMenu } from "../components/features/PopularMenu";
import { Testimonial } from "../components/features/Testimonial";
import banners from "../constants/banners";
import { useReservationNavigation } from "../utils/navigation";

import { Footer } from "../components/common/Footer";

export const Home = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [_loadedImages, setLoadedImages] = useState(new Set());
  const navigate = useNavigate();
  const handleReservationClick = useReservationNavigation(navigate);

  const handleBannerChange = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  // Preload images
  useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = reject;
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      try {
        setImageLoading(true);
        const imagePromises = banners.map(banner => preloadImage(banner.image));
        await Promise.all(imagePromises);
        setLoadedImages(new Set(banners.map(banner => banner.image)));
        setImageLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setImageLoading(false);
      }
    };

    loadAllImages();
  }, []);

  // Set up automatic banner rotation
  useEffect(() => {
    if (!imageLoading) {
      const intervalId = setInterval(handleBannerChange, 5000);
      return () => clearInterval(intervalId);
    }
  }, [imageLoading]);

  const current = banners[bannerIndex];

  // Modern Loading Component
  const LoadingIndicator = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-gradient-to-br from-[#230700] via-[#8C4A3B] to-[#230700] flex items-center justify-center z-20"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.img 
          src={logo} 
          alt="Chill 99 Logo" 
          className="w-24 h-24 lg:w-32 lg:h-32 filter drop-shadow-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Modern Line Loader */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#ffc000] via-[#DAA520] to-[#ffc000] rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <motion.p
          className="text-white/80 text-lg font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading Experience...
        </motion.p>
      </div>
    </motion.div>
  );

  // Modern Scroll Indicator Component - Enhanced positioning
  const ScrollIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-white/90 text-sm font-medium tracking-wider">SCROLL</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full relative bg-white/10 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-[#ffc000] rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 shadow-lg"
          />
        </div>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        >
          <FaChevronDown className="text-white/70 text-sm" />
        </motion.div>
      </motion.div>
    </motion.div>
  );

  // Enhanced Background Pattern Component
  const BackgroundPattern = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #ffc000 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, #DAA520 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, #B8860B 1.5px, transparent 1.5px),
            radial-gradient(circle at 70% 30%, #ffc000 1px, transparent 1px),
            radial-gradient(circle at 90% 10%, #DAA520 2px, transparent 2px),
            radial-gradient(circle at 10% 90%, #B8860B 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 120px 120px, 80px 80px, 200px 200px, 90px 90px',
          backgroundPosition: '0 0, 30px 30px, 60px 10px, 15px 45px, 75px 25px, 45px 75px'
        }} />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5"
      >
        <div className="w-full h-full border-2 border-[#ffc000] transform rotate-45" />
      </motion.div>

      <motion.div
        animate={{ 
          rotate: [360, 0],
          y: [-20, 20, -20]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 left-1/6 w-24 h-24 opacity-8"
      >
        <div className="w-full h-full rounded-full border-2 border-[var(--green-primary)]" />
      </motion.div>

      <motion.div
        animate={{ 
          rotate: [0, 180, 360],
          x: [-30, 30, -30]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-3/4 right-1/6 w-16 h-16 opacity-6"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#ffc000]/20 to-[#DAA520]/20 transform rotate-12" />
      </motion.div>

      {/* Modern Gradient Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/6 left-1/12 w-40 h-40 bg-gradient-radial from-[#ffc000]/20 via-[#DAA520]/10 to-transparent rounded-full blur-xl"
      />

      <motion.div
        animate={{ 
          scale: [1.2, 0.8, 1.2],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/6 right-1/12 w-60 h-60 bg-gradient-radial from-[var(--green-primary)]/15 via-[#DAA520]/8 to-transparent rounded-full blur-2xl"
      />

      {/* Animated Lines */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5"
      >
        <div className="absolute inset-0 border-l-2 border-[#ffc000] transform rotate-45" />
        <div className="absolute inset-0 border-l-2 border-[var(--green-primary)] transform -rotate-45" />
      </motion.div>
    </div>
  );

  return (
    <div className="w-full overflow-x-hidden relative lg:pt-20">
      <TopLine />
      <Navbar />
      <FloatingContactIcons />

      {/* Hero Banner */}
      <section
        className="text-white flex items-center justify-center px-4 lg:px-50 min-h-[96vh] md:min-h-[60vh] lg:min-h-[96vh] relative overflow-hidden"
        onClick={!imageLoading ? handleBannerChange : undefined}
        onTouchStart={!imageLoading ? handleBannerChange : undefined}
        style={{ cursor: imageLoading ? "default" : "pointer" }}
      >
        {/* Loading Indicator */}
        {imageLoading && <LoadingIndicator />}

        {/* Enhanced Background Pattern */}
        {!imageLoading && <BackgroundPattern />}

        {/* Animated Background with Slide Transition */}
        {!imageLoading && (
          <motion.div
            key={`bg-${bannerIndex}`}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, #230700DD 0%, #8C4A3B40 50%, #23070080 100%), url(${current.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* Enhanced Animated Overlay Pattern */}
        {!imageLoading && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ffc00020] to-transparent"
            />
            
            {/* Additional Modern Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 3, delay: 1 }}
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse at top left, #ffc00015 0%, transparent 50%),
                  radial-gradient(ellipse at bottom right, #DAA52015 0%, transparent 50%),
                  linear-gradient(45deg, transparent 40%, #ffc00008 50%, transparent 60%)
                `
              }}
            />
          </>
        )}
        
        {/* Content Container with Advanced Animations */}
        {!imageLoading && (
          <div className="relative z-10 flex flex-row text-left max-w-4xl left-[-20%]">
            <motion.img 
              key={`logo-${bannerIndex}`}
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              src={logo} 
              alt="Chill 99 Logo" 
              style={{ height: "11vw", marginRight: "16px" }} 
              className="filter drop-shadow-2xl"
            />
            <div>
              <div className="mb-3 overflow-hidden">
                <motion.h1
                  key={`title-${bannerIndex}`}
                  initial={{ opacity: 0, y: 100, skewY: 7 }}
                  animate={{ opacity: 1, y: 0, skewY: 0 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 80
                  }}
                  className="flex items-center text-left text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight filter drop-shadow-lg"
                  style={{ 
                    color: "#ffc000",
                    textShadow: "0 4px 8px rgba(0,0,0,0.3)"
                  }}
                >
                  {current.title}
                </motion.h1>
              </div>
              <div className="mb-5 overflow-hidden">
                <motion.p
                  key={`subtitle-${bannerIndex}`}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.9,
                    type: "spring",
                    stiffness: 60
                  }}
                  className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium filter drop-shadow-md"
                  style={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.4)"
                  }}
                >
                  {current.subtitle}
                </motion.p>
              </div>
              
              {/* Simplified Button (Removed Animation) */}
              <motion.div
                key={`buttons-${bannerIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex flex-col sm:flex-row text-[var(--color-topline)] items-center justify-center lg:justify-start gap-3 text-sm sm:text-base lg:text-lg font-medium"
              >
                {current.buttons.map((btn, idx) =>
                  btn.href ? (
                    <motion.a
                      key={`btn-${idx}-${bannerIndex}`}
                      href={btn.href}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.4 + (idx * 0.15),
                        type: "spring",
                        stiffness: 120
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -6,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ 
                        scale: 0.98,
                        transition: { duration: 0.1 }
                      }}
                      className={`${btn.color} flex items-center gap-3 px-6 lg:px-8 py-4 rounded-xl cursor-pointer w-full sm:w-auto justify-center min-h-[48px] min-w-[160px] shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 relative overflow-hidden group`}
                      style={{
                        background: idx === 0 
                          ? "linear-gradient(135deg, #DAA520 0%, #B8860B 100%)"
                          : btn.color
                      }}
                    >
                      <div className="relative z-10 flex items-center gap-3">
                        {btn.icon && btn.icon} {btn.text} 
                        <FaChevronRight />
                      </div>
                    </motion.a>
                  ) : (
                    <motion.button
                      key={`btn-${idx}-${bannerIndex}`}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.4 + (idx * 0.15),
                        type: "spring",
                        stiffness: 120
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -6,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ 
                        scale: 0.98,
                        transition: { duration: 0.1 }
                      }}
                      className={`${btn.color} flex items-center gap-3 px-6 lg:px-8 py-4 rounded-xl cursor-pointer w-full sm:w-auto justify-center min-h-[48px] min-w-[160px] shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 relative overflow-hidden group`}
                      style={{
                        background: idx === 0 
                          ? "linear-gradient(135deg, #DAA520 0%, #B8860B 100%)"
                          : btn.color
                      }}
                    >
                      <div className="relative z-10 flex items-center gap-3">
                        {btn.icon && btn.icon} {btn.text} 
                        <FaChevronRight />
                      </div>
                    </motion.button>
                  )
                )}
              </motion.div>
            </div>
          </div>
        )}

        {/* Modern Banner Indicators */}
        {!imageLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="absolute bottom-28 lg:bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20"
          >
            {banners.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === bannerIndex 
                    ? 'bg-[#ffc000] shadow-lg scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setBannerIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        )}

        {/* Enhanced Scroll Indicator */}
        {!imageLoading && <ScrollIndicator />}

        {/* Enhanced Floating Animation Elements */}
        {!imageLoading && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#ffc000] rounded-full"
            >
              <motion.div
                animate={{ 
                  y: [-20, 20, -20],
                  x: [-10, 10, -10]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-[#ffc000] rounded-full opacity-60 shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2, delay: 1.5 }}
              className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-[var(--green-primary)] rounded-full"
            >
              <motion.div
                animate={{ 
                  y: [15, -15, 15],
                  x: [8, -8, 8]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-[var(--green-primary)] rounded-full opacity-80 shadow-md"
              />
            </motion.div>

            {/* Additional Modern Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 3, delay: 2 }}
              className="absolute top-1/6 left-1/3 w-3 h-3 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-full blur-sm"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 3, delay: 2.5 }}
              className="absolute bottom-1/4 left-1/5 w-4 h-4 border-2 border-[#ffc000]/40 rounded-full"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full border-2 border-[#ffc000]/60 rounded-full"
              />
            </motion.div>
          </>
        )}
      </section>

      {/* About Us */}
      <section
        className="text-white flex flex-col lg:flex-row items-center justify-between gap-8 px-4 lg:px-50 py-12 lg:py-0 min-h-[70vh] lg:min-h-[100vh] bg-[#261410]"
        style={{
          backgroundImage: ` url(${aboutbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col text-center lg:text-left"
        >
          <h2 className="font-medium text-lg">ABOUT US</h2>
          <p className="text-[var(--green-primary)] font-semibold italic text-2xl sm:text-3xl lg:text-4xl mb-3">
            Where tradition meets taste in the heart of Galle Fort.
          </p>
          <p className=" text-base sm:text-lg lg:text-xl mx-auto lg:mx-0 w-2/4">
            <span className="font-bold">Chill 99 Galle Fort</span>
            is a charming café Nestled in the scenic village of Galle Fort, in the heart of Galle,
            Southern Province, Sri Lanka, Chill 99 Galle Fort is a delightful oasis of calm and
            tranquility. This charming cafe is renowned for its wide variety of pastry items,
            different cappuccino, coffee, amazing taste bubble tea refreshing beverages, and more,
            making it a beloved destination for locals and visitors alike. As you step into Chill 99
            Galle Fort, you are greeted with a warm and inviting atmosphere, perfect for escaping
            the hustle and bustle of everyday life. The cafe's interior is cozy yet stylish, with
            comfortable seating arrangements and tasteful decor that creates a serene ambiance.
          </p>
        </motion.div>
      </section>

      {/* Breakfast Banner */}
      <section
        className="text-white flex flex-col lg:flex-row items-stretch min-h-[40vh] lg:h-[271px] overflow-hidden"
        style={{
          backgroundImage: ` url(${cofee})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section - Breakfast Spread Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/3 relative"
        ></motion.div>

        {/* Right Section - Text and Button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-12 py-8 lg:py-12"
          style={{
            position: "relative",
            right: "-1rem",
          }}
        >
          <div className=" lg:text-left px-1 text-center">
            <p className="font-medium text-lg lg:text-xl mb-3 text-white">
              Start your day with a cozy breakfast at Chill 99.
            </p>
            <h2 className="text-[#FFD700] font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 tracking-wide">
              BREAKFAST RESERVATION
            </h2>
            <p className="text-white font-medium text-lg lg:text-xl">SHARE THE MORNING TOGETHER</p>
          </div>

          <motion.button
            onClick={() => handleReservationClick("breakfast")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1 px-6 lg:px-2 py-4 rounded-lg bg-[#DAA520] hover:bg-[#B8860B] transition-all duration-500 cursor-pointer min-h-[48px] min-w-[160px] justify-center text-white font-semibold"
          >
            BOOK A SPOT <FaChevronRight />
          </motion.button>
        </motion.div>
      </section>

      {/* Image Carousel */}
      <section className="bg-[var(--color-navbar)] min-h-[400px] lg:h-[60vh] w-full flex items-center justify-center">
        <ImageCarousel />
      </section>

      {/* Best Dishes */}
      <section
        className="text-white flex flex-col px-4 lg:px-50 py-10 items-center justify-center gap-8 min-h-[80vh] lg:min-h-[100vh] bg-[#230700]"
        style={{
          backgroundImage: `linear-gradient(to right, #230700C4, #230700C4), url(${popularBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Choose Best Dishes</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Chill 99 – Customer Favorites
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-6xl"
        >
          <PopularMenu />
        </motion.div>
      </section>

      {/* Table Booking Banner */}
      <section
        className="text-white flex flex-col lg:flex-row items-stretch min-h-[40vh] lg:h-[271px] overflow-hidden"
        style={{
          backgroundImage: ` url(${thirdbanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section - Breakfast Spread Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/3 relative"
        ></motion.div>

        {/* Right Section - Text and Button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-12 py-8 lg:py-12"
          style={{
            position: "relative",
            right: "-1rem",
          }}
        >
          <div className=" lg:text-left px-1 text-center">
            <p className="font-medium text-lg lg:text-xl mb-3 text-white">
              Need a Table On Chill 99.
            </p>
            <h2 className="text-[#FFD700] font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 tracking-wide">
              Booking Table For Your & Family Members
            </h2>
            <p className="text-white font-medium text-lg lg:text-xl">SHARE THE MORNING TOGETHER</p>
          </div>

          <motion.button
            onClick={() => handleReservationClick("rice-and-curry")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1 px-6 lg:px-2 py-4 rounded-lg bg-[#DAA520] hover:bg-[#B8860B] transition-all duration-500 cursor-pointer min-h-[48px] min-w-[160px] justify-center text-white font-semibold"
          >
            BOOK A TABLE <FaChevronRight />
          </motion.button>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="bg-[#261410] w-full min-h-[100vh] px-4 lg:px-50 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-center text-white gap-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-[40%] flex justify-center"
        >
          <motion.img
            src={whychhose}
            alt="Why choose us"
            className="w-full max-w-md lg:w-[80%]"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-start w-full lg:w-[60%] gap-6"
        >
          <div className="text-center lg:text-left">
            <p className="text-lg lg:text-xl font-medium text-[#FAF3E0] mb-2">Why Choose Us</p>
            <h2 className="text-[var(--green-primary)] italic font-semibold text-2xl sm:text-3xl lg:text-4xl">
              Your perfect café escape in Galle Fort.
            </h2>
          </div>

          {[
            {
              icon: iconchoose01,
              title: "Signature Dishes, Freshly Prepared Daily",
              desc: "Enjoy a range of handcrafted dishes, made with bold flavors, fresh ingredients, and a whole lot of care.",
            },
            {
              icon: iconchoose02,
              title: "Coffee That Warms the Soul",
              desc: "From smooth cappuccinos to bold espresso – we brew every cup with care.",
            },
            {
              icon: iconchoose03,
              title: "Bubble Tea, Bursting with Flavor",
              desc: "Discover your new favorite drink among our unique and refreshing bubble tea blends.",
            },
            {
              icon: iconchoose04,
              title: "A Cozy Escape in Galle Fort",
              desc: "Relax in a warm, stylish setting tucked inside the historic beauty of Galle Fort.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="flex flex-col sm:flex-row items-start gap-3 text-center sm:text-left"
            >
              <img src={item.icon} alt="" className="w-8 h-8 mx-auto sm:mx-0 mt-2 flex-shrink-0" />
              <div className="flex flex-col">
                <h3 className="text-[#FAF3E0] font-bold text-lg lg:text-xl xl:text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="text-base lg:text-lg font-normal">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Menu Categories */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full min-h-[400px] lg:h-[441px] bg-[#31201B] px-4 lg:px-50 flex items-center justify-center py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
          {[
            { title: "Cafe Menu", icon: iconchoose02 },
            { title: "Coffee Menu", icon: iconchoose05 },
            { title: "Beverages", icon: iconchoose06 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative w-full h-48 lg:h-64 overflow-hidden rounded-lg cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to right, #31201BBA, #31201BBA), url(${burger})`,
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <img src={item.icon} alt="" className="w-8 h-8 lg:w-12 lg:h-12 mb-2" />
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--green-primary)] tracking-wide">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-4 lg:inset-8 border-2 border-[var(--green-primary)] opacity-80" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[80vh] lg:min-h-[100vh] flex flex-col bg-[#31201B] text-white px-4 lg:px-50 py-12 lg:py-20 gap-8 lg:gap-16"
        style={{
          backgroundImage: `linear-gradient(to right, #2D1B17C9, #2D1B17C9), url(${testimonial})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center flex justify-between max-sm:block">
          <img
            src={logo}
            alt="Chill 99 Logo"
            className="hidden lg:block top-10 left-30 w-32 lg:w-50 h-auto"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-[#FAF3E0] font-medium text-lg lg:text-xl mb-2">Customer Feedback</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--green-primary)] italic">
              What Our Clients Say
            </h2>
          </motion.div>
          <div className="mt-4 flex items-center justify-center">
            <ReviewButtons />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 flex items-center justify-center w-full"
        >
          <Testimonial />
        </motion.div>
      </motion.section>

      {/* Statistics */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="bg-[#230700FC] min-h-[250px] lg:h-[300px] w-full flex flex-col lg:flex-row items-center justify-around lg:justify-between px-4 lg:px-50 py-8 lg:py-10 text-white gap-8 lg:gap-0"
      >
        {[
          { number: "120+", title: "Happy Customers", subtitle: "Sweet smiles, daily." },
          { number: "350+", title: "Dishes Served", subtitle: "Flavors with Feeling." },
          { number: "50+", title: "Positive Reviews", subtitle: "A local and tourist favorite." },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <h3 className="text-[#F4C430] text-3xl sm:text-4xl lg:text-5xl font-medium mb-2">
              {stat.number}
            </h3>
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">{stat.title}</h4>
            <p className="text-base lg:text-xl font-medium">{stat.subtitle}</p>
          </motion.div>
        ))}
      </motion.section>

      <FAQ />

      {/* Workshop Banner */}
      <section
        className="text-white flex flex-col lg:flex-row items-stretch min-h-[40vh] lg:h-[271px] overflow-hidden"
        style={{
          backgroundImage: ` url(${mandala})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section - Breakfast Spread Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/3 relative"
        ></motion.div>

        {/* Right Section - Text and Button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-12 py-8 lg:py-12"
          style={{
            position: "relative",
            right: "-1rem",
          }}
        >
          <div className=" lg:text-left px-1 text-center">
            <p className="font-medium text-lg lg:text-xl mb-3 text-white">
              Workshop Slots Filling Fast – Book Now!.
            </p>
            <h2 className="text-[#FFD700] font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 tracking-wide">
              Workshop Seats For You & Your Loved Ones
            </h2>
            <p className="text-white font-medium text-lg lg:text-xl">SHARE THE MORNING TOGETHER</p>
          </div>

          <motion.button
            onClick={() => handleReservationClick("workshop")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1 px-6 lg:px-2 py-4 rounded-lg bg-[#DAA520] hover:bg-[#B8860B] transition-all duration-500 cursor-pointer min-h-[48px] min-w-[160px] justify-center text-white font-semibold"
          >
            BOOK A TABLE <FaChevronRight />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};