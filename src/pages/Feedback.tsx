import carosal1 from "../assets/feed-back/carosal-image-01.jpg";
import carosal2 from "../assets/feed-back/carosal-image-02.jpg";
import carosal3 from "../assets/feed-back/carosal-image-03.jpg";
import carosal4 from "../assets/feed-back/carosal-image-04.jpg";
import carosal5 from "../assets/feed-back/carosal-image-05.jpg";
import mainImage from "../assets/feed-back/main-image.png";
import sideImage1 from "../assets/feed-back/side-images-01.jpg";
import sideImage2 from "../assets/feed-back/side-images-02.jpg";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { TopLine } from "../components/common/TopLine";

const carosalImages = [carosal1, carosal2, carosal3, carosal4, carosal5];

import { useState } from "react";
import { motion } from "framer-motion";

export const Feedback = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="w-full overflow-x-hidden relative">
      <TopLine />
      <Navbar />
      {/* Hero Banner */}
      <section
        className="text-white flex items-center justify-center px-4 lg:px-50 transition-all duration-700 min-h-[60vh] lg:min-h-[80vh]"
        style={{
          backgroundImage: `linear-gradient(to right, #1F0D09E0 60%, #1F0D0900), url('${mainImage}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col text-center lg:text-left max-w-4xl lg:absolute lg:left-[10%]">
            <motion.div className="mb-6"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                From Your Table to Our Heart at <br className="hidden lg:block" /> Chill 99
              </h1>
            </motion.div>
            <motion.div className="mb-5"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium">
                A collection of voices, made to inspire both our hearts and our service.
              </p>
            </motion.div>
        </div>
      </section>

      {/* Feedback Gallery */}
      <section className="bg-[#2D1B17] w-full px-4 lg:px-10 py-12 flex flex-col items-center justify-center text-white gap-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 w-full mb-8">
          {carosalImages.map((img, idx) => {
            let marginClass = "";
            if (idx % 2 === 0) marginClass = "mt-4 lg:mt-12";
            else marginClass = "mb-4 lg:mb-12";

            return (
              <motion.div
                key={idx}
                className={`specific-styles-class ${marginClass} bg-[#31201B] rounded-lg overflow-hidden shadow-lg flex items-center justify-center`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <img
                  src={img}
                  alt={`Feedback ${idx + 1}`}
                  className="w-full h-40 sm:h-60 lg:h-96 object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Side Images and Form Section */}
      <section className="bg-[#1F0D09] w-full flex flex-col lg:flex-row items-center justify-between">
        <motion.img
          src={sideImage1}
          alt="Side 1"
          className="hidden lg:block w-1/4 object-cover"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />

        {/* Feedback Form Section - Updated for mobile responsiveness */}
        <section className="w-full lg:w-2/4 flex flex-col items-center justify-center text-white gap-8 py-12 px-4 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Share Your Thoughts</p>
            <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[#FFD580] font-semibold mb-2">
              Because your voice shapes us.
            </h2>
          </motion.div>
          <motion.form
            className="w-full max-w-2xl flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: {} }}
          >
            <div className="flex flex-col sm:flex-row gap-6 items-center w-full">
              <motion.div
                className="flex flex-col w-full sm:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="fullname" className="text-base text-[#FFD580] mb-2 text-left">
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="Full Name"
                  className="p-4 text-base rounded bg-transparent border border-[#FFD580] text-white focus:outline-none focus:border-[var(--green-primary)] placeholder-gray-300 min-h-[48px]"
                />
              </motion.div>
              <motion.div
                className="flex flex-col w-full sm:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="text-base text-[#FFD580] mb-2 text-left">Rating</label>
                <div className="flex flex-row gap-2 justify-center sm:justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={star <= rating ? "#FFD580" : "none"}
                        stroke="#FFD580"
                        strokeWidth="2"
                        className="w-7 h-7 lg:w-8 lg:h-8"
                      >
                        <polygon
                          points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9"
                          style={{ transition: "fill 0.2s" }}
                        />
                      </svg>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="feedback" className="text-base text-[#FFD580] mb-2 text-left">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                placeholder="Your feedback"
                className="p-4 text-base rounded bg-transparent border border-[#FFD580] text-white focus:outline-none focus:border-[var(--green-primary)] placeholder-gray-300 min-h-[120px] resize-none"
              />
            </motion.div>
            <motion.div
              className="flex justify-center sm:justify-end w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 rounded-lg bg-[#FFD580] text-[#31201B] font-semibold hover:bg-[var(--green-primary)] hover:text-white transition-all duration-300 min-w-[160px] min-h-[48px] text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Feedback
              </motion.button>
            </motion.div>
          </motion.form>
        </section>

        <motion.img
          src={sideImage2}
          alt="Side 2"
          className="hidden lg:block w-1/4 object-cover"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </section>

      <Footer />
    </div>
  );
};
