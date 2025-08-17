import formimg2 from "../assets/imagecaro-01.jpg";
import formimg1 from "../assets/imageside.jpg";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { TopLine } from "../components/common/TopLine";

import banner from "../assets/gallery/background-image.jpg";
import bun01 from "../assets/gallery/bun-01.jpg";
import bun02 from "../assets/gallery/bun-02.jpg";
import imagecaro01 from "../assets/gallery/imagecaro-01.jpg";
import pancake from "../assets/gallery/pancake.jpg";
import pie from "../assets/gallery/pie.jpg";
import sandwich01 from "../assets/gallery/sandwich-01.jpg";
import sandwich04 from "../assets/gallery/sandwich-04.jpg";
import sandwitch02 from "../assets/gallery/sandwitch-02.jpg";
import sandwitch03 from "../assets/gallery/sandwitch-03.jpg";

const galleryImages = [
  bun01,
  bun02,
  imagecaro01,
  pancake,
  pie,
  sandwich01,
  sandwich04,
  sandwitch02,
  sandwitch03,
];

export const Gallery = () => {
  return (
    <div className="w-full overflow-x-hidden relative">
      <TopLine />
      <Navbar />

      {/* Hero Banner */}
      <section
        className="text-white flex items-center justify-center px-4 lg:px-50 transition-all duration-700 min-h-[60vh] lg:min-h-[80vh]"
        style={{
          backgroundImage: `linear-gradient(to right, #230700, #8C4A3B00), url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
      >
        <div className="flex flex-col text-center lg:text-left absolute left-[10%]">
          <div className="mb-3">
            <h1 className="text-2xl sm:text-3xl lg:text-[60px] font-bold leading-tight">
              A Taste of Moments at <br />
              Chill 99
            </h1>
          </div>
          <div className="mb-5">
            <p className="text-base sm:text-lg lg:text-xl italic text-[var(--green-primary)] font-medium">
              A gallery of flavors, made to please both your eyes and your appetite{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#1F0D09] w-full px-4 lg:px-50 py-12 lg:py-20 flex flex-col items-center justify-center text-white gap-8">
        <div className="flex flex-col items-center text-center mb-8">
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Our Photo Gallery</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[var(--green-primary)] font-semibold">
            Looks Our Photo Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-[#31201B] rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Section (copied from Menu.tsx) */}
      <section
        id="reservation-section"
        className="bg-[#1F0D09] w-full min-h-screen flex items-center justify-center relative"
      >
        {/* Left image */}
        <img
          src={formimg1}
          alt=""
          className="hidden md:block w-1/4 min-h-screen object-cover object-right"
        />

        {/* Center form */}
        <div className="w-full lg:w-2/4 px-6 lg:px-16 py-12 flex flex-col items-center text-center text-white bg-[#1F0D09]">
          <p className="text-lg lg:text-xl text-[#FAF3E0] font-medium">Booking Table</p>
          <h2 className="italic text-2xl sm:text-3xl lg:text-4xl text-[#FFD580] font-semibold mb-8">
            Make Your Reservation
          </h2>

          {/* Form fields */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <select className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none">
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
            </select>
            <input
              type="date"
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
            <input
              type="time"
              className="p-3 rounded bg-transparent border border-[#E5E7EB] focus:outline-none"
            />
          </form>

          <div className="flex items-center text-sm sm:text-base lg:text-lg font-medium mt-6">
            <button className="flex items-center gap-3 px-4 lg:px-5 py-2 rounded-lg bg-[var(--green-primary)] hover:bg-[var(--green-dark)] transition-all duration-500 cursor-pointer">
              BOOKING TABLE
            </button>
          </div>
        </div>

        {/* Right image */}
        <img
          src={formimg2}
          alt=""
          className="hidden md:block w-1/4 min-h-screen object-cover object-left"
        />
      </section>

      <Footer />
    </div>
  );
};
