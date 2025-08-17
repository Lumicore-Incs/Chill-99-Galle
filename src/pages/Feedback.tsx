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
        <div className="flex flex-col text-center lg:text-left absolute left-[10%]">
          <div className="mb-3">
            <h1 className="text-2xl sm:text-3xl lg:text-[60px] font-bold leading-tight">
              From Your Table to Our Heart at <br /> Chill 99
            </h1>
          </div>
          <div className="mb-5">
            <p className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium">
              A collection of voices, made to inspire both our hearts and our service.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Gallery */}
      <section className="bg-[#2D1B17] w-full px-4 lg:px-10 py-12 flex flex-col items-center justify-center text-white gap-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[2rem] w-full mb-8">
          {carosalImages.map((img, idx) => {
            let marginClass = "";
            if (idx % 2 === 0) marginClass = "mt-[3rem]";
            else marginClass = "mb-[3rem]";

            return (
              <div
                key={idx}
                className={`specific-styles-class ${marginClass} bg-[#31201B] rounded-lg overflow-hidden shadow-lg flex items-center justify-center`}
              >
                <img
                  src={img}
                  alt={`Feedback ${idx + 1}`}
                  className="w-full h-[25rem] object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Side Images */}
      <section className="bg-[#1F0D09] w-full flex items-center justify-between">
        <img src={sideImage1} alt="Side 1" className="w-1/4  object-cover" />

        {/* Feedback Form Section - Updated to match screenshot */}
        <section className="w-2/4 flex flex-col items-center justify-center text-white gap-8 py-12">
          <div className="flex flex-col items-center text-center mb-8">
            <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Share Your Thoughts</p>
            <h2 className="italic text-3xl lg:text-4xl text-[#FFD580] font-semibold mb-2">
              Because your voice shapes us.
            </h2>
          </div>
          <form className="w-full max-w-2xl flex flex-col gap-6">
            <div className="flex flex-row gap-6 items-center w-full">
              <div className="flex flex-col w-1/2">
                <label htmlFor="fullname" className="text-base text-[#FFD580] mb-2 text-left">
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="Full Name"
                  className="p-3 rounded bg-transparent border border-[#FFD580] text-white focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-base text-[#FFD580] mb-2 text-left">Rating</label>
                <div className="flex flex-row gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                      aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={star <= rating ? "#FFD580" : "none"}
                        stroke="#FFD580"
                        strokeWidth="2"
                        className="w-6 h-6"
                      >
                        <polygon
                          points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9"
                          style={{ transition: "fill 0.2s" }}
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="feedback" className="text-base text-[#FFD580] mb-2 text-left">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                placeholder="Your feedback"
                className="p-3 rounded bg-transparent border border-[#FFD580] text-white focus:outline-none min-h-[100px]"
              />
            </div>
            <div className="flex justify-end w-full">
              <button className="px-6 py-2 rounded bg-[#FFD580] text-[#31201B] font-semibold hover:bg-[#e6b85c] transition-all duration-300 min-w-[120px]">
                Submit
              </button>
            </div>
          </form>
        </section>

        <img src={sideImage2} alt="Side 2" className="w-1/4 object-cover" />
      </section>

      <Footer />
    </div>
  );
};
